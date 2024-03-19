import React from 'react';

// importing hooks
import { useFolderState } from './folder/folderState.js';
import { useFoldersList } from './folder/foldersList.js';
import { useFileProps } from './file/fileProps.js';

export const InputsComponent = ({ folderState }) => {
    const { 
        fileSize, 
        fileName, setFileName,
        fileAuthor, setFileAuthor,
        fileType, setFileType,
        filePath, setFilePath,
    } = useFileProps();
    
    const { activeFolder } = useFolderState();
    const { folderList } = useFoldersList();

    const pushFile = (e) => {
        e.preventDefault(); 
        
        console.log('ACTIVE FOLDER: ', activeFolder);
        console.log(folderList);
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
                        onChange={(event) => { event.preventDefault(); setFileName(event.target.value) }}
                    />

                    <input 
                        id='fileAuthor' 
                        type='text'
                        placeholder='Author'
                        value={fileAuthor}
                        onChange={(event) => { event.preventDefault(); setFileAuthor(event.target.value) }}
                    />

                    <div className='inputWrapper'>
                        <input
                            className='inputPath' 
                            id='filePath' 
                            type='text'
                            placeholder='C://dir/dir2/file'
                            value={filePath}
                            onChange={(event) => { event.preventDefault(); setFilePath(event.target.value) }}
                        />

                        <select 
                            placeholder='.type'
                            value={fileType}
                            onChange={(event) => { event.preventDefault(); setFileType(event.target.value) }}
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
