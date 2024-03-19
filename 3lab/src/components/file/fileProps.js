import { useState } from 'react';

export const useFileProps = () => {
    const [fileSize, setFileSize] = useState(0);
    const [fileName, setFileName] = useState('');
    const [filePath, setFilePath] = useState('');
    const [fileType, setFileType] = useState('');
    const [fileAuthor, setFileAuthor] = useState('');
    
    return {
        fileSize, setFileSize,
        fileName, setFileName,
        filePath, setFilePath,
        fileType, setFileType,
        fileAuthor, setFileAuthor
    };
};
