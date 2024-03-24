import React from 'react';
import Folder from './folder/folderClass.js';

// importing hooks
import { useState } from 'react';
import { useFileProps } from './file/fileProps.js';
import { useFoldersList } from './folder/foldersList.js';

export const FoldersComponent = ({ folderState = { 
                                                activeFolder: '',
                                                setActiveFolder: () => {},
                                                folders: [], setFolders: () => {}
                                        }
                                }) => {
    const [folderName, setFolderName] = useState('');
    const { activeFolder, setActiveFolder } = folderState;
    const { folders, setFolders } = useFoldersList();
    const { fileName, fileAuthor, fileType, setFileSize } = useFileProps();

    const createFolder = (e) => {
        e.preventDefault();

        const newFolder = new Folder({ 
            id: folders.length,
            name: folderName 
        });

        console.log('New Folder Data: ', newFolder.folderData());

        setFolders([...folders, newFolder.folderData()]); 
        setFolderName('');
    }
    
    const handleName = (e) => {
        setFolderName(e.target.value);
        setFileSize(fileName.length + fileAuthor.length + activeFolder + fileType);
    }

    const chooseFolder = (e) => {
        console.log('Choose Folder: ', e.target.id)
        if( activeFolder !== e.target.id && e.target.id) {
            setActiveFolder(e.target.id);
        } else {
            console.log('Already on this folder');
        }

        console.log('--- Choosen done ---');
    }
    
    return (
        <div className='main'>
            <div className='wrapper'>
                <h2 className='title'> Choose Folder </h2>

                <div className='folders'>
                    { folders.map((element, index) => (
                        <div 
                            className='folder' 
                            onClick={ chooseFolder } 
                            id={index} 
                            key={index}
                        >
                            <div className='filePic'> </div>
                            <h6> {` ${ element.name }`} </h6>
                        </div>
                    ))}
                </div>
            </div>
            
            <br></br>

            <div className='wrapper'> 
                <form className='newFolder' onSubmit={createFolder}>
                    <input
                        id='folderName'
                        className='folderName' 
                        placeholder='Enter new folder name'
                        onChange={handleName}
                    ></input>
                    <button type='submit'> Create Folder </button>
                </form>
            </div>
        </div>
    );
};
