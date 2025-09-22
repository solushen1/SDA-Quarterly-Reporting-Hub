
import React, { useState, useCallback } from 'react';
import { UploadIcon, XCircleIcon } from './icons';

interface FileUploaderProps {
    initialFiles: string[];
    onFilesChange: (base64Files: string[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ initialFiles, onFilesChange }) => {
    const [files, setFiles] = useState<string[]>(initialFiles);

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files);
            const remainingSlots = 4 - files.length;
            
            if (newFiles.length > remainingSlots) {
                alert(`You can only upload ${remainingSlots} more photos.`);
            }

            const filesToProcess = newFiles.slice(0, remainingSlots);

            const readPromises = filesToProcess.map(file => {
                return new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            Promise.all(readPromises).then(base64Strings => {
                const updatedFiles = [...files, ...base64Strings];
                setFiles(updatedFiles);
                onFilesChange(updatedFiles);
            }).catch(error => {
                console.error("Error reading files:", error);
                alert("An error occurred while reading files.");
            });
        }
    }, [files, onFilesChange]);

    const removeFile = (index: number) => {
        const newFilesArray = files.filter((_, i) => i !== index);
        setFiles(newFilesArray);
        onFilesChange(newFilesArray);
    };

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                {files.map((file, index) => (
                    <div key={index} className="relative group aspect-square">
                        <img src={file} alt={`preview ${index}`} className="w-full h-full object-cover rounded-md" />
                        <button
                            onClick={() => removeFile(index)}
                            className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <XCircleIcon className="h-5 w-5" />
                        </button>
                    </div>
                ))}
            </div>
            {files.length < 4 && (
                 <label className="cursor-pointer flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <div className="text-center">
                        <UploadIcon className="mx-auto h-8 w-8 text-gray-400" />
                        <p className="mt-1 text-sm text-gray-600">Upload Photos ({4 - files.length} remaining)</p>
                        <input type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
                    </div>
                </label>
            )}
        </div>
    );
};

export default FileUploader;
