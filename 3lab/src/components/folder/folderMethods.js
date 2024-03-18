import React from 'react';
import Folder from './folderClass';

// importing hooks
import { useState } from 'react';
import { useFileSize } from '../file/fileSize.js';
import { useFolderState } from './folderState';
import { useFoldersList } from './foldersList';

export const FolderMethods = () => {
    const [folderName, setFolderName] = useState('');
    const { activeFolder, setActiveFolder } = useFolderState();
    const { folders, setFolders } = useFoldersList();
    const { setFileSize } = useFileSize();

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

        console.log('--- Choosen done ---')
    }

    const isEmpty = () => {
        if (folders.length === 0 && activeFolder === -1 || !folders[activeFolder]?.folderData) {
            
            console.log('folders:', folders);
            console.log('activeFolder:', activeFolder);
            console.log('folderData:', folders[activeFolder]?.folderData);

            return <h2 className='isEmpty'> Empty </h2>;
        } else {
            let folder = folders[activeFolder];
            let files = folder.folderData().files;
    
            return (
                <div className='wrapper'>
                    {files.map((element, index) => (
                        <h5 key={index}> {element} </h5>
                    ))}
                </div>
            );
        }
    };
    

    return (
        <div className='main'>
            <div className='wrapper'>
                <h2 className='title'> Choose Folder </h2>

                <div className='folders'>

                    {isEmpty()}
                    
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
