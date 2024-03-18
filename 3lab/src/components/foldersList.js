import { useState } from 'react';

export const useFoldersList = () => {
    const [ folders, setFolders ] = useState([]);

    return {
        folders,
        setFolders
    };
};
