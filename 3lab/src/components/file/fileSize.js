import { useState } from 'react';

export const useFileSize = () => {
    const [fileSize, setFileSize] = useState(0);

    console.log("changing folder size --- fileSize.js: ")

    return {
        fileSize,
        setFileSize
    };
};
