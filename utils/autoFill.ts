import type { Report, ReportSection, ReportField } from '../types';
import { TEMPLATE_EXAMPLES } from '../exampleData';

/**
 * Auto-fills a report with example data based on the template
 * @param report - The current report to fill
 * @param templateId - The ID of the template to get example data for
 * @returns Updated report with example data filled in
 */
export function autoFillWithExampleData(report: Report, templateId: string): Report {
  const exampleData = TEMPLATE_EXAMPLES[templateId];
  
  if (!exampleData) {
    console.warn(`No example data found for template: ${templateId}`);
    return report;
  }

  // Create a copy of the report to avoid mutations
  const updatedReport: Report = {
    ...report,
    sections: report.sections.map(section => ({
      ...section,
      fields: section.fields.map(field => {
        // Try to find matching example data for this field
        const sectionExampleData = exampleData[section.title];
        if (!sectionExampleData) {
          return field;
        }

        // Look for exact label match first
        let exampleValue = sectionExampleData[field.label];
        
        // If no exact match, try partial matching for related fields
        if (exampleValue === undefined) {
          const labelLower = field.label.toLowerCase();
          const matchingKey = Object.keys(sectionExampleData).find(key => {
            const keyLower = key.toLowerCase();
            // Check for partial matches (useful for fields with slight variations)
            return keyLower.includes(labelLower) || labelLower.includes(keyLower);
          });
          
          if (matchingKey) {
            exampleValue = sectionExampleData[matchingKey];
          }
        }

        // If we found a matching value, apply it based on field type
        if (exampleValue !== undefined) {
          if (field.type === 'photos') {
            // For photo fields, keep them empty as we don't have actual photos
            return { ...field, value: [] };
          } else if (field.type === 'number') {
            // Ensure numeric fields get numbers
            const numValue = typeof exampleValue === 'number' ? exampleValue : parseInt(String(exampleValue), 10);
            return { ...field, value: isNaN(numValue) ? '' : numValue.toString() };
          } else if (field.type === 'date') {
            // Convert date strings to proper format
            return { ...field, value: String(exampleValue) };
          } else {
            // For text, textarea, and other fields
            return { ...field, value: String(exampleValue) };
          }
        }

        return field;
      })
    }))
  };

  return updatedReport;
}

/**
 * Checks if example data is available for a given template
 * @param templateId - The template ID to check
 * @returns True if example data exists for this template
 */
export function hasExampleData(templateId: string): boolean {
  return templateId in TEMPLATE_EXAMPLES;
}