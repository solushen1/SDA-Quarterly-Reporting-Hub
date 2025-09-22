
import React from 'react';
import type { ReportField } from '../types';
import FileUploader from './FileUploader';
import { TrashIcon, PencilIcon } from './icons';

interface ReportFieldProps {
  field: ReportField;
  onFieldChange: (field: ReportField) => void;
  onRemove: () => void;
  isEditing: boolean;
}

const inputStyles = "w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition";

const ReportFieldComponent: React.FC<ReportFieldProps> = ({ field, onFieldChange, onRemove, isEditing }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onFieldChange({ ...field, value: e.target.value });
  };
  
  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange({ ...field, label: e.target.value });
  };

  const handlePhotoChange = (files: string[]) => {
    onFieldChange({ ...field, value: files });
  };

  const renderField = () => {
    switch (field.type) {
      case 'textarea':
        return <textarea value={field.value as string} onChange={handleChange} className={inputStyles} placeholder={field.placeholder} rows={4}></textarea>;
      case 'number':
        return <input type="number" value={field.value as string} onChange={handleChange} className={inputStyles} placeholder={field.placeholder} />;
      case 'date':
        return <input type="date" value={field.value as string} onChange={handleChange} className={inputStyles} />;
      case 'photos':
        return <FileUploader initialFiles={field.value as string[]} onFilesChange={handlePhotoChange} />;
      case 'text':
      default:
        return <input type="text" value={field.value as string} onChange={handleChange} className={inputStyles} placeholder={field.placeholder} />;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2 flex-grow">
          {isEditing && <PencilIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />}
          <input
            type="text"
            value={field.label}
            onChange={handleLabelChange}
            readOnly={!isEditing}
            className={`font-medium text-gray-700 bg-transparent border-none p-0 focus:ring-0 w-full ${!isEditing ? 'pointer-events-none cursor-default' : ''}`}
          />
        </div>
        {isEditing && (
          <button onClick={onRemove} title="Delete Field" className="p-1 text-gray-400 hover:text-red-500">
            <TrashIcon className="h-5 w-5" />
          </button>
        )}
      </div>
      <div>
        {renderField()}
      </div>
    </div>
  );
};

export default ReportFieldComponent;
