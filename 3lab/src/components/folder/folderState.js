import { useState } from 'react';

export const useFolderState = () => {
    const [activeFolder, setActiveFolder] = useState(-1);

    console.log("changes active folder --- folderState.js: ", activeFolder)

    return {
        activeFolder,
        setActiveFolder
    };
};
