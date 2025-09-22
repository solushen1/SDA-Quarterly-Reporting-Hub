import React, { useState } from 'react';
import { SparklesIcon } from './icons';

interface PPTPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (config: PPTConfig) => void;
  isGenerating: boolean;
}

export interface PPTConfig {
  slideCount: number;
  template: string;
  designStyle: string;
  colorScheme: string;
}

const PPT_TEMPLATES = [
  { id: 'professional', name: 'Professional Business', description: 'Clean, corporate design with charts and data focus' },
  { id: 'modern', name: 'Modern Minimalist', description: 'Contemporary layout with bold typography and whitespace' },
  { id: 'creative', name: 'Creative Vibrant', description: 'Colorful, engaging design with visual elements' },
  { id: 'formal', name: 'Formal Academic', description: 'Traditional, scholarly presentation format' },
  { id: 'infographic', name: 'Infographic Style', description: 'Visual-heavy with icons, charts, and graphics' },
];

const DESIGN_STYLES = [
  { id: 'corporate', name: 'Corporate', description: 'Professional blue and gray theme' },
  { id: 'warm', name: 'Warm & Inviting', description: 'Earth tones and friendly colors' },
  { id: 'bold', name: 'Bold & Dynamic', description: 'High contrast with vibrant accents' },
  { id: 'elegant', name: 'Elegant & Refined', description: 'Sophisticated with premium feel' },
  { id: 'tech', name: 'Tech & Modern', description: 'Futuristic with gradients and effects' },
];

const COLOR_SCHEMES = [
  { id: 'blue', name: 'Professional Blue', colors: ['#1E40AF', '#3B82F6', '#93C5FD'] },
  { id: 'green', name: 'Growth Green', colors: ['#047857', '#10B981', '#6EE7B7'] },
  { id: 'purple', name: 'Creative Purple', colors: ['#7C3AED', '#A855F7', '#C4B5FD'] },
  { id: 'orange', name: 'Energetic Orange', colors: ['#EA580C', '#F97316', '#FED7AA'] },
  { id: 'teal', name: 'Fresh Teal', colors: ['#0F766E', '#14B8A6', '#7DD3FC'] },
];

export default function PPTPreviewModal({ isOpen, onClose, onGenerate, isGenerating }: PPTPreviewModalProps) {
  const [slideCount, setSlideCount] = useState(5);
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [selectedDesignStyle, setSelectedDesignStyle] = useState('corporate');
  const [selectedColorScheme, setSelectedColorScheme] = useState('blue');

  if (!isOpen) return null;

  const handleGenerate = () => {
    const config: PPTConfig = {
      slideCount,
      template: selectedTemplate,
      designStyle: selectedDesignStyle,
      colorScheme: selectedColorScheme,
    };
    onGenerate(config);
  };

  const selectedColors = COLOR_SCHEMES.find(scheme => scheme.id === selectedColorScheme);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">PowerPoint Presentation Options</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={isGenerating}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Slide Count */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Number of Slides
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="3"
                max="20"
                value={slideCount}
                onChange={(e) => setSlideCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                disabled={isGenerating}
              />
              <span className="text-lg font-bold text-blue-600 min-w-[3rem] text-center">
                {slideCount}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Choose between 3-20 slides for your presentation
            </p>
          </div>

          {/* Template Selection */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Presentation Template
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PPT_TEMPLATES.map((template) => (
                <div
                  key={template.id}
                  onClick={() => !isGenerating && setSelectedTemplate(template.id)}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedTemplate === template.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Style */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Design Style
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {DESIGN_STYLES.map((style) => (
                <div
                  key={style.id}
                  onClick={() => !isGenerating && setSelectedDesignStyle(style.id)}
                  className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                    selectedDesignStyle === style.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <h3 className="font-medium text-gray-900">{style.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{style.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Color Scheme */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Color Scheme
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {COLOR_SCHEMES.map((scheme) => (
                <div
                  key={scheme.id}
                  onClick={() => !isGenerating && setSelectedColorScheme(scheme.id)}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedColorScheme === scheme.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      {scheme.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="font-medium text-gray-900">{scheme.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preview Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Presentation Summary</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Slides:</strong> {slideCount}</p>
              <p><strong>Template:</strong> {PPT_TEMPLATES.find(t => t.id === selectedTemplate)?.name}</p>
              <p><strong>Style:</strong> {DESIGN_STYLES.find(s => s.id === selectedDesignStyle)?.name}</p>
              <p><strong>Colors:</strong> {selectedColors?.name}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end space-x-3">
          <button
            onClick={onClose}
            disabled={isGenerating}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating PowerPoint...
              </>
            ) : (
              <>
                <SparklesIcon className="h-5 w-5 mr-2" />
                Generate PowerPoint
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}