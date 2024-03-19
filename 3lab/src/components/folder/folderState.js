import { useState } from 'react';

export const useFolderState = () => {
    const [activeFolder, setActiveFolder] = useState();

    console.log("changes active folder --- folderState.js: ", activeFolder)

    return {
        activeFolder,
        setActiveFolder
    };
};
