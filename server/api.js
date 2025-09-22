import express from 'express';
import cors from 'cors';
import { GoogleGenAI, Modality } from '@google/genai';
import PptxGenJS from 'pptxgenjs';
import { PDFDocument } from 'pdf-lib';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Initialize Gemini AI with server-side API key (try both possible env vars)
const API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
let ai = null;

if (!API_KEY) {
  console.warn('⚠️  No API key found. The app will start but AI features will be disabled.');
  console.warn('   To enable AI features, set GEMINI_API_KEY environment variable.');
} else {
  ai = new GoogleGenAI({ apiKey: API_KEY });
  console.log('✅ Gemini AI initialized successfully');
}

// Helper function to generate single image
async function generateSingleImage(prompt, imageParts = []) {
  try {
    // Use a stable Gemini model for image generation
    const model = 'gemini-1.5-flash';
    
    const contents = {
      parts: [{ text: prompt }, ...imageParts]
    };

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
          const base64ImageBytes = part.inlineData.data;
          const mimeType = part.inlineData.mimeType;
          return `data:${mimeType};base64,${base64ImageBytes}`;
        }
      }
    }
    
    throw new Error("AI failed to generate an image");
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}

// Helper function to convert base64 image to buffer
function base64ToBuffer(base64String) {
  const base64Data = base64String.replace(/^data:image\/[a-z]+;base64,/, '');
  return Buffer.from(base64Data, 'base64');
}

// Function to create actual PDF file from generated image
async function createPDFFile(imageBase64) {
  try {
    const pdfDoc = await PDFDocument.create();
    const imageBuffer = base64ToBuffer(imageBase64);
    
    let image;
    if (imageBase64.includes('data:image/png')) {
      image = await pdfDoc.embedPng(imageBuffer);
    } else {
      image = await pdfDoc.embedJpg(imageBuffer);
    }
    
    const page = pdfDoc.addPage([image.width, image.height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });
    
    return await pdfDoc.save();
  } catch (error) {
    console.error('Error creating PDF:', error);
    throw new Error('Failed to create PDF file');
  }
}

// Function to create actual PPTX file from generated slide images
async function createPPTXFile(slideImages, reportName, config) {
  try {
    const pres = new PptxGenJS();
    
    // Set presentation properties
    pres.title = reportName || 'Quarterly Report';
    pres.author = 'SDA Quarterly Reporting Hub';
    pres.company = 'SDA';
    
    // Add each slide with its generated image
    slideImages.forEach((imageBase64, index) => {
      const slide = pres.addSlide();
      
      // Use full data URL as PptxGenJS expects it
      slide.addImage({
        data: imageBase64, // Keep the full data URL
        x: 0,
        y: 0,
        w: 10, // Use numeric inches - standard slide width
        h: 7.5 // Use numeric inches - standard slide height for 16:9
      });
    });
    
    return await pres.write('base64');
  } catch (error) {
    console.error('Error creating PPTX:', error);
    throw new Error('Failed to create PowerPoint file');
  }
}

// Create generation prompts
function createGenerationPrompt(report, format, config = {}) {
  const basePrompt = `
    You are an AI image generator creating stunning, professional visual content. Your task is to create a ${format === 'pdf' ? 'comprehensive document page' : 'presentation slide'} based on the provided report data.
    
    **Report Title:** ${report.name}
    
    **Visual Standards:**
    - Use professional, modern design principles with excellent typography
    - Create beautiful, graphical layouts with proper hierarchy and spacing
    - Include relevant charts, graphs, and visual elements where appropriate
    - Ensure high contrast and readability
    - Use consistent styling throughout
    
    **Content Guidelines:**
    - Structure content logically with clear, attractive headings
    - Transform numerical data into compelling charts and visualizations
    - Create clean, professional tables for data presentation
    - Use icons and visual elements to enhance comprehension

    IMPORTANT: Generate only the image. No text responses.
  `;

  let formatSpecificInstructions = '';
  
  if (format === 'pdf') {
    formatSpecificInstructions = `
    **PDF Document Format:**
    - Create a comprehensive, professional document page
    - Use formal business layout with proper margins
    - Include headers, clear sections, and professional formatting
    `;
  } else {
    const template = config.template || 'professional';
    const designStyle = config.designStyle || 'corporate';
    const colorScheme = config.colorScheme || 'blue';
    
    const templateInstructions = {
      professional: 'Clean, corporate design with data focus and business aesthetics',
      modern: 'Contemporary layout with bold typography, minimalist design',
      creative: 'Colorful, engaging design with vibrant visuals and creative elements',
      formal: 'Traditional, scholarly presentation with academic formatting',
      infographic: 'Visual-heavy design with icons, charts, graphics'
    }[template];
    
    const styleInstructions = {
      corporate: 'Professional blue and gray corporate theme',
      warm: 'Earth tones and friendly, approachable color palette',
      bold: 'High contrast design with vibrant accent colors',
      elegant: 'Sophisticated design with premium feel',
      tech: 'Futuristic design with gradients and modern effects'
    }[designStyle];
    
    const colorInstructions = {
      blue: 'Professional blue color scheme (#1E40AF, #3B82F6, #93C5FD)',
      green: 'Growth-focused green palette (#047857, #10B981, #6EE7B7)',
      purple: 'Creative purple theme (#7C3AED, #A855F7, #C4B5FD)',
      orange: 'Energetic orange palette (#EA580C, #F97316, #FED7AA)',
      teal: 'Fresh teal color scheme (#0F766E, #14B8A6, #7DD3FC)'
    }[colorScheme];
    
    formatSpecificInstructions = `
    **PowerPoint Slide Format (16:9 aspect ratio):**
    - Template Style: ${templateInstructions}
    - Design Approach: ${styleInstructions}
    - Color Palette: ${colorInstructions}
    - Create presentation slide optimized for projection
    - Use large, readable fonts and clear visual hierarchy
    `;
  }

  // Add report data
  let dataText = '\n**Report Data:**\n';
  let hasAnyData = false;
  
  report.sections?.forEach(section => {
    let sectionFieldsText = '';
    let sectionHasContent = false;

    section.fields?.forEach(field => {
      const isPhotoField = field.type === 'photos';
      const hasPhotos = isPhotoField && Array.isArray(field.value) && field.value.length > 0;
      const hasTextValue = !isPhotoField && typeof field.value === 'string' && field.value.trim() !== '';

      if (hasPhotos || hasTextValue) {
        sectionHasContent = true;
        if (hasPhotos) {
          sectionFieldsText += `- ${field.label}: [Images attached]\n`;
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
    dataText += '\n(No data entered. Generate a template with placeholder content.)';
  }
  
  return `${basePrompt}\n${formatSpecificInstructions}\n${dataText}`;
}

function createSlidePrompt(report, slideNumber, totalSlides, config) {
  const slideTypes = [
    'Title Slide - Introduction and overview',
    'Executive Summary - Key highlights and metrics',
    'Data Analysis - Charts and statistics',
    'Key Achievements - Success stories and milestones', 
    'Financial Overview - Budget and financial data',
    'Future Goals - Plans and objectives',
    'Conclusion - Summary and next steps'
  ];
  
  const slideType = slideTypes[Math.min(slideNumber - 1, slideTypes.length - 1)];
  
  const template = config.template || 'professional';
  const designStyle = config.designStyle || 'corporate';
  const colorScheme = config.colorScheme || 'blue';
  
  const templateInstructions = {
    professional: 'Clean, corporate design with data focus',
    modern: 'Contemporary layout with bold typography',
    creative: 'Colorful, engaging design with vibrant visuals',
    formal: 'Traditional, scholarly presentation format',
    infographic: 'Visual-heavy design with icons and charts'
  }[template];
  
  const styleInstructions = {
    corporate: 'Professional blue and gray theme',
    warm: 'Earth tones and friendly colors',
    bold: 'High contrast with vibrant accents',
    elegant: 'Sophisticated with premium feel',
    tech: 'Futuristic with gradients and effects'
  }[designStyle];
  
  const colorInstructions = {
    blue: 'Professional blue (#1E40AF, #3B82F6, #93C5FD)',
    green: 'Growth green (#047857, #10B981, #6EE7B7)',
    purple: 'Creative purple (#7C3AED, #A855F7, #C4B5FD)',
    orange: 'Energetic orange (#EA580C, #F97316, #FED7AA)',
    teal: 'Fresh teal (#0F766E, #14B8A6, #7DD3FC)'
  }[colorScheme];

  return `
    Create a stunning PowerPoint slide (16:9) for slide ${slideNumber} of ${totalSlides}.
    
    **Slide Focus:** ${slideType}
    **Report:** ${report.name}
    **Template:** ${templateInstructions}
    **Style:** ${styleInstructions}  
    **Colors:** ${colorInstructions}
    
    **Requirements:**
    - Focus on the specific slide type content
    - Beautiful, professional design with clear hierarchy
    - Large, readable fonts for presentation
    - Compelling visuals and data representations
    - Modern, clean business aesthetic
    
    Generate only the slide image.
  `;
}

// API endpoints
app.post('/api/generate', async (req, res) => {
  try {
    const { report, format, config } = req.body;
    
    if (!report || !format) {
      return res.status(400).json({ error: 'Missing required fields: report, format' });
    }

    if (!API_KEY || !ai) {
      return res.status(500).json({ 
        error: 'Gemini API key not configured. Please set GEMINI_API_KEY environment variable to enable AI features.' 
      });
    }

    // For PowerPoint with multiple slides
    if (format === 'ppt' && config?.slideCount > 1) {
      const slideCount = Math.min(config.slideCount, 20); // Support up to 20 slides
      const slides = [];
      
      // Generate slides with some concurrency control
      const batchSize = 3;
      for (let i = 0; i < slideCount; i += batchSize) {
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, slideCount); j++) {
          const slidePrompt = createSlidePrompt(report, j + 1, slideCount, config);
          batch.push(generateSingleImage(slidePrompt));
        }
        
        const batchResults = await Promise.allSettled(batch);
        batchResults.forEach(result => {
          if (result.status === 'fulfilled' && result.value) {
            slides.push(result.value);
          }
        });
      }
      
      // Create actual PPTX file
      const pptxBase64 = await createPPTXFile(slides, report.name, config);
      
      const safeName = (report.name || 'report').replace(/[^a-zA-Z0-9_-]/g, '_');
      res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
      res.set('Content-Disposition', `attachment; filename="${safeName}.pptx"`);
      
      // Send the PPTX file as buffer
      const fileBuffer = Buffer.from(pptxBase64, 'base64');
      res.send(fileBuffer);
      
    } else if (format === 'pdf') {
      // Generate PDF
      const prompt = createGenerationPrompt(report, format, config);
      const image = await generateSingleImage(prompt);
      
      // Create actual PDF file
      const pdfBytes = await createPDFFile(image);
      
      const safeName = (report.name || 'report').replace(/[^a-zA-Z0-9_-]/g, '_');
      res.set('Content-Type', 'application/pdf');
      res.set('Content-Disposition', `attachment; filename="${safeName}.pdf"`);
      res.send(Buffer.from(pdfBytes));
      
    } else {
      // Single slide PPT
      const prompt = createGenerationPrompt(report, format, config);
      const image = await generateSingleImage(prompt);
      
      if (format === 'ppt') {
        const pptxBase64 = await createPPTXFile([image], report.name, config);
        
        const safeName = (report.name || 'report').replace(/[^a-zA-Z0-9_-]/g, '_');
        res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
        res.set('Content-Disposition', `attachment; filename="${safeName}.pptx"`);
        
        const fileBuffer = Buffer.from(pptxBase64, 'base64');
        res.send(fileBuffer);
      } else {
        res.json({ image });
      }
    }
  } catch (error) {
    console.error('Generation error:', error);
    res.status(500).json({ error: error.message || 'Generation failed' });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API server running on port ${PORT}`);
});

export default app;