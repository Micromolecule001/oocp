import React from 'react';
import Folder from './folderClass.js';

// importing hooks
import { useState } from 'react';
import { useFolderState } from './folderState.js';
import { useFoldersList } from './foldersList.js';

export const InputsComponent = () => {
    const [fileName, setFileName] = useState('');
    const [fileAuthor, setFileAuthor] = useState('');
    const [filePath, setFilePath] = useState('');
    const [fileType, setFileType] = useState('');
    const [fileSize, setFileSize] = useState(0);
    const { activeFolder } = useFolderState();

    const pushFile = (e) => {
        e.preventDefault(); 
        setFileSize(fileName.length + fileAuthor.length + activeFolder + fileType);
        
        console.log('New File: ', fileName, fileAuthor, activeFolder, fileType );


    }

    return (
        <div className='main'>
            <div className="wrapper">
                <form onSubmit={pushFile}>
                    <input 
                        id='fileName'
                        type='text' 
                        placeholder='Name'
                        value={fileName}
                        onChange={(event) => setFileName(event.target.value)}
                    />

                    <input 
                        id='fileAuthor' 
                        type='text'
                        placeholder='Author'
                        value={fileAuthor}
                        onChange={(event) => setFileAuthor(event.target.value)}
                    />

                    <div className='inputWrapper'>
                        <input
                            className='inputPath' 
                            id='filePath' 
                            type='text'
                            placeholder='C://dir/dir2/file'
                            value={filePath}
                            onChange={(event) => setFilePath(event.target.value)}
                        />

                        <select 
                            placeholder='.type'
                            value={fileType}
                            onChange={(event) => setFileType(event.target.value)}
                        >
                            <option value='1'> .exe </option>
                            <option value='2'> .docx </option>
                            <option value='3'> .scss </option>
                            <option value='4'> .ejs </option>
                        </select>
                        
                        <div className='outputWrapper'>
                            <h2 className='fileSizeTitle'>Total file size:</h2>
                            <h2 className='fileSize'>{fileSize}</h2>
                        </div>
                    </div>
                
                    <button className='inputSubmit' type='submit'>Push file to database</button>
                </form>
            </div>
        </div>
    );
};
