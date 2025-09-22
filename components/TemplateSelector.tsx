
import React from 'react';
import type { ReportTemplate } from '../types';

interface TemplateSelectorProps {
  templates: ReportTemplate[];
  onSelect: (templateId: string) => void;
  selectedValue: string;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ templates, onSelect, selectedValue }) => {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onSelect(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out text-center"
    >
      <option value="">-- Select a Report --</option>
      {templates.map(template => (
        <option key={template.id} value={template.id}>
          {template.name}
        </option>
      ))}
    </select>
  );
};

export default TemplateSelector;