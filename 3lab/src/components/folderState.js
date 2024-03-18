import { useState } from 'react';

export const useFolderState = () => {
    const [activeFolder, setActiveFolder] = useState(-1);

    return {
        activeFolder,
        setActiveFolder
    };
};
