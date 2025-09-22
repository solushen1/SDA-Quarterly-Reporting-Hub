import React, { useState } from 'react';
import type { Report, ReportSection, ReportField } from '../types';
import ReportSectionComponent from './ReportSection';
import { PlusIcon, PencilIcon, CheckIcon, SparklesIcon } from './icons';

interface ReportFormProps {
  report: Report;
  setReport: React.Dispatch<React.SetStateAction<Report | null>>;
  onAutoFill?: () => void;
  hasExampleData?: boolean;
}

const uid = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

const ReportForm: React.FC<ReportFormProps> = ({ report, setReport, onAutoFill, hasExampleData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSectionChange = (updatedSection: ReportSection) => {
    setReport(prevReport => {
      if (!prevReport) return null;
      return {
        ...prevReport,
        sections: prevReport.sections.map(s => s.id === updatedSection.id ? updatedSection : s)
      };
    });
  };

  const addSection = () => {
     setReport(prev => {
        if (!prev) return null;
        const newSection: ReportSection = {
            id: uid(),
            title: 'New Section',
            fields: [{ id: uid(), label: 'New Field', type: 'text', value: '' }],
        };
        return {...prev, sections: [...prev.sections, newSection]};
     });
  };

  const duplicateSection = (sectionId: string) => {
    setReport(prev => {
        if(!prev) return null;
        const sectionToDuplicate = prev.sections.find(s => s.id === sectionId);
        if(!sectionToDuplicate) return prev;
        
        const newSection: ReportSection = {
            ...sectionToDuplicate,
            id: uid(),
            title: `${sectionToDuplicate.title} (Copy)`,
            fields: sectionToDuplicate.fields.map(f => ({...f, id: uid()})),
        };
        const index = prev.sections.findIndex(s => s.id === sectionId);
        const newSections = [...prev.sections];
        newSections.splice(index + 1, 0, newSection);
        return {...prev, sections: newSections};
    });
  };

  const removeSection = (sectionId: string) => {
    setReport(prev => prev ? {...prev, sections: prev.sections.filter(s => s.id !== sectionId)} : null);
  };
  
  const toggleButtonClasses = isEditing
    ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
    : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">{report.name}</h2>
            <div className="flex items-center gap-3">
              {hasExampleData && onAutoFill && (
                <button
                  onClick={onAutoFill}
                  className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-colors"
                  title="Fill form with example data from the PDF"
                >
                  <SparklesIcon className="h-5 w-5 mr-2 -ml-1" />
                  Fill Example Data
                </button>
              )}
              <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${toggleButtonClasses}`}
              >
              {isEditing ? (
                  <>
                  <CheckIcon className="h-5 w-5 mr-2 -ml-1" />
                  Done Editing
                  </>
              ) : (
                  <>
                  <PencilIcon className="h-5 w-5 mr-2 -ml-1" />
                  Edit Template
                  </>
              )}
              </button>
            </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {report.sections.map((section) => (
            <ReportSectionComponent
            key={section.id}
            section={section}
            onSectionChange={handleSectionChange}
            onDuplicate={() => duplicateSection(section.id)}
            onRemove={() => removeSection(section.id)}
            isEditing={isEditing}
            />
        ))}
        {isEditing && (
            <div className="pt-4 border-t">
            <button onClick={addSection} className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
                <PlusIcon className="h-5 w-5 mr-2" />
                Add Section
            </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default ReportForm;
