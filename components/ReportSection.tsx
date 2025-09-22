
import React from 'react';
import type { ReportSection, ReportField } from '../types';
import ReportFieldComponent from './ReportField';
import { PlusIcon, TrashIcon, DocumentDuplicateIcon, PencilIcon } from './icons';

interface ReportSectionProps {
  section: ReportSection;
  onSectionChange: (section: ReportSection) => void;
  onDuplicate: () => void;
  onRemove: () => void;
  isEditing: boolean;
}

const uid = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

const ReportSectionComponent: React.FC<ReportSectionProps> = ({ section, onSectionChange, onDuplicate, onRemove, isEditing }) => {

  const handleFieldChange = (updatedField: ReportField) => {
    onSectionChange({
      ...section,
      fields: section.fields.map(f => f.id === updatedField.id ? updatedField : f)
    });
  };

  const addField = () => {
    const newField: ReportField = {
        id: uid(),
        label: 'New Field',
        type: 'text',
        value: ''
    };
    onSectionChange({...section, fields: [...section.fields, newField]});
  };

  const removeField = (fieldId: string) => {
    onSectionChange({...section, fields: section.fields.filter(f => f.id !== fieldId)});
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSectionChange({...section, title: e.target.value});
  };
  
  return (
    <div className="border border-gray-200 p-6 rounded-lg bg-gray-50/50">
      <div className="flex justify-between items-center mb-6 pb-4 border-b">
        <div className="flex items-center gap-2 flex-grow">
            {isEditing && <PencilIcon className="h-5 w-5 text-gray-400" />}
            <input 
                type="text"
                value={section.title}
                onChange={handleTitleChange}
                readOnly={!isEditing}
                className={`text-xl font-semibold text-gray-700 bg-transparent border-none focus:ring-0 p-0 w-full ${!isEditing ? 'pointer-events-none cursor-default' : ''}`}
            />
        </div>
        {isEditing && (
          <div className="flex items-center space-x-2">
              <button onClick={onDuplicate} title="Duplicate Section" className="p-1 text-gray-500 hover:text-indigo-600"><DocumentDuplicateIcon className="h-5 w-5" /></button>
              <button onClick={onRemove} title="Remove Section" className="p-1 text-gray-500 hover:text-red-600"><TrashIcon className="h-5 w-5" /></button>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        {section.fields.map(field => (
          <ReportFieldComponent
            key={field.id}
            field={field}
            onFieldChange={handleFieldChange}
            onRemove={() => removeField(field.id)}
            isEditing={isEditing}
          />
        ))}
      </div>
       {isEditing && (
        <div className="mt-6">
          <button onClick={addField} className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              <PlusIcon className="h-4 w-4 mr-1" />
              Add Field
          </button>
        </div>
       )}
    </div>
  );
};

export default ReportSectionComponent;
