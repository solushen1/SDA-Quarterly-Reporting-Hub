
import type { Report } from '../types';

// Get the API base URL - in development use localhost:3001, in production use relative paths
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3001/api';



export const generateReportVisual = async (report: Report, format: 'pdf' | 'ppt', config?: any): Promise<void> => {
    try {
        const response = await fetch(`${API_BASE_URL}/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                report,
                format,
                config
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
        }

        // Handle file download
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        
        // Extract filename from response headers or use default
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = `report.${format}`;
        if (contentDisposition) {
            const match = contentDisposition.match(/filename="([^"]+)"/);
            if (match) {
                filename = match[1];
            }
        } else {
            filename = `${report.name || 'report'}.${format === 'ppt' ? 'pptx' : format}`;
        }
        
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
    } catch (error) {
        console.error('Error calling generation API:', error);
        throw error instanceof Error ? error : new Error('Unknown error occurred');
    }
};

