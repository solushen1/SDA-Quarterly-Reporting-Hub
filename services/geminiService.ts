
import { GoogleGenAI, Modality } from "@google/genai";
import type { Report } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

// Helper to get base64 data and mime type from data URL
const getBase64 = (dataUrl: string): { mimeType: string, base64Data: string } | null => {
    try {
        const parts = dataUrl.split(',');
        if (parts.length !== 2) {
            console.error("Invalid data URL format");
            return null;
        }
        const mimeMatch = parts[0].match(/:(.*?);/);
        if (!mimeMatch || mimeMatch.length < 2) {
            console.error("Could not extract mime type from data URL");
            return null;
        }
        
        const mimeType = mimeMatch[1];
        const base64Data = parts[1];
        return { mimeType, base64Data };
    } catch (e) {
        console.error("Error parsing data URL:", e);
        return null;
    }
};


const createGenerationPrompt = (report: Report, format: 'pdf' | 'ppt'): string => {
  const basePrompt = `
    You are an AI image generator. Your task is to create a single, high-quality image based on the provided report data.
    The image should be a visually appealing summary of the report.
    The aesthetic must be clean, hopeful, and professional, suitable for a church organization. Use a consistent, pleasant color palette and modern, readable typography.
    
    **Report Title:** ${report.name}

    **Content Guidelines:**
    - Structure the page logically with clear headings for each section from the data provided.
    - If tabular data is present, display it in a clean, easy-to-read table.
    - If numerical data (e.g., finances, membership stats) is present, create an appropriate chart (e.g., bar chart, pie chart).
    - If images are attached to the data, incorporate them tastefully into the design.

    IMPORTANT: Your response must be only the generated image. Do not include any text, greetings, or explanations in your response.
  `;

  const formatSpecificInstructions = format === 'pdf'
    ? `The image should be a comprehensive summary page, formatted like a professional PDF document.`
    : `The image should be a summary slide for a presentation, formatted for a 16:9 aspect ratio. It should be engaging and readable from a distance, prioritizing key visuals.`;
  
  let dataText = `
    **Report Data:**
    `;

  let hasAnyData = false;
  report.sections.forEach(section => {
    let sectionFieldsText = '';
    let sectionHasContent = false;

    section.fields.forEach(field => {
      const isPhotoField = field.type === 'photos';
      const hasPhotos = isPhotoField && Array.isArray(field.value) && field.value.length > 0;
      const hasTextValue = !isPhotoField && typeof field.value === 'string' && field.value.trim() !== '';

      if (hasPhotos || hasTextValue) {
        sectionHasContent = true;
        if (hasPhotos) {
          sectionFieldsText += `- ${field.label}: [See attached images for this section]\n`;
        } else {
          sectionFieldsText += `- ${field.label}: ${field.value}\n`;
        }
      }
    });

    if (sectionHasContent) {
      dataText += `\n--- ${section.title} ---\n${sectionFieldsText}`;
      hasAnyData = true;
    }
  });

  if (!hasAnyData) {
      dataText += `\n(No data was entered for this report. Generate a visually appealing template for this report title, using placeholder text and sample charts where appropriate.)`;
  }
  
  return `${basePrompt}\n\n**Image Format:** ${formatSpecificInstructions}\n\n${dataText}`;
};


export const generateReportVisual = async (report: Report, format: 'pdf' | 'ppt'): Promise<string | null> => {
    if (!API_KEY) {
        throw new Error("Gemini API key is not configured.");
    }
    
    const model = 'gemini-2.5-flash-image-preview'; // aka 'nano-banana'

    const prompt = createGenerationPrompt(report, format);

    const textPart = { text: prompt };
    const imageParts = report.sections
        .flatMap(s => s.fields)
        .filter(f => f.type === 'photos' && Array.isArray(f.value))
        .flatMap(f => (f.value as string[]))
        .map(dataUrl => {
            const parsedData = getBase64(dataUrl);
            if (!parsedData) return null;
            return {
                inlineData: {
                    data: parsedData.base64Data,
                    mimeType: parsedData.mimeType,
                },
            };
        })
        .filter((part): part is { inlineData: { data: string; mimeType: string; } } => part !== null);

    const contents = {
        parts: [textPart, ...imageParts]
    };

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: contents,
            config: {
                responseModalities: [Modality.IMAGE, Modality.TEXT],
            },
        });

        const parts = response.candidates?.[0]?.content?.parts;

        if (parts) {
            for (const part of parts) {
                if (part.inlineData && part.inlineData.data) {
                    const base64ImageBytes: string = part.inlineData.data;
                    const mimeType = part.inlineData.mimeType;
                    return `data:${mimeType};base64,${base64ImageBytes}`;
                }
            }
        }
        
        // Fallback or error if no image is found
        const textResponse = response.text;
        console.warn("Gemini did not return an image. Text response:", textResponse);
        throw new Error("AI failed to generate an image. It responded with: " + (textResponse || "No text response."));

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`An error occurred while communicating with the AI: ${error.message}`);
        }
        throw new Error("An unknown error occurred while communicating with the AI.");
    }
};
