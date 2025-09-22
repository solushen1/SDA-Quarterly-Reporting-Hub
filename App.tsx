
import React, { useState, useEffect, useCallback } from 'react';
import { REPORT_TEMPLATES } from './constants';
import type { Report, ReportTemplate } from './types';
import TemplateSelector from './components/TemplateSelector';
import ReportForm from './components/ReportForm';
import { generateReportVisual } from './services/geminiService';
import { PlusCircleIcon, SparklesIcon } from './components/icons';

// A custom hook to sync state with localStorage
const useLocalStorage = <T,>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};


export default function App() {
  const [templates] = useState<ReportTemplate[]>(REPORT_TEMPLATES);
  const [activeReport, setActiveReport] = useLocalStorage<Report | null>('activeReport', null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatingType, setGeneratingType] = useState<'pdf' | 'ppt' | null>(null);
  const [generatedFileType, setGeneratedFileType] = useState<'pdf' | 'ppt' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTemplateSelect = (templateId: string) => {
    if (!templateId) {
      setActiveReport(null);
      return;
    }
    const selectedTemplate = templates.find(t => t.id === templateId);
    if (selectedTemplate) {
      const newReport: Report = {
        ...selectedTemplate,
        sections: selectedTemplate.sections.map(section => ({
          ...section,
          fields: section.fields.map(field => ({
            ...field,
            value: field.type === 'photos' ? [] : ''
          }))
        }))
      };
      setActiveReport(newReport);
      setGeneratedImage(null);
      setGeneratedFileType(null);
    }
  };

  const handleGenerateClick = async (format: 'pdf' | 'ppt') => {
    if (!activeReport) return;
    setGeneratingType(format);
    setError(null);
    setGeneratedImage(null);
    try {
      const result = await generateReportVisual(activeReport, format);
      if (result) {
        setGeneratedImage(result);
        setGeneratedFileType(format);
      } else {
        setError('Failed to generate report visual. The result was empty.');
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setGeneratingType(null);
    }
  };
  
  const isLoading = generatingType !== null;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">SDA Quarterly Reporting Hub</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center">Select a Report Template</h2>
          <TemplateSelector
            templates={templates}
            onSelect={handleTemplateSelect}
            selectedValue={activeReport?.id || ''}
          />
        </div>

        {activeReport ? (
          <div>
            <ReportForm report={activeReport} setReport={setActiveReport} />
            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-4">
               <button
                onClick={() => handleGenerateClick('pdf')}
                disabled={isLoading}
                className="flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {generatingType === 'pdf' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    Generate PDF Visual
                  </>
                )}
              </button>
               <button
                onClick={() => handleGenerateClick('ppt')}
                disabled={isLoading}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {generatingType === 'ppt' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating PPT...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    Generate PPT Visual
                  </>
                )}
              </button>
            </div>
            
            {error && <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-400 rounded-lg">{error}</div>}

            {generatedImage && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Generated {generatedFileType?.toUpperCase()} Preview</h3>
                <div className="border rounded-lg overflow-hidden">
                   <img src={generatedImage} alt="Generated Report" className="w-full h-auto" />
                </div>
                 <a
                    href={generatedImage}
                    download={`report-visual-${generatedFileType}.png`}
                    className="mt-4 inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                  >
                    Download Image
                  </a>
              </div>
            )}
          </div>
        ) : (
           <div className="text-center py-12 bg-white rounded-lg shadow-lg">
              <PlusCircleIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No report selected</h3>
              <p className="mt-1 text-sm text-gray-500">Please choose a template from the dropdown to begin.</p>
            </div>
        )}
      </main>
    </div>
  );
}