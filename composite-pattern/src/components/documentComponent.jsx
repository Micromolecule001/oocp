import React from "react";

export const DocumentComponent = ({ file, fileOperations }) => {
    console.log('!!!!!!!!!File:', file); 

    const handleUpdateFile = (e) => {
        const { id, value } = e.target;

        console.log('id,value: ', id, value);

        switch (id) {
            case 'name':
                file.name = value;
                fileOperations.name.method(value);

                console.log('opa', fileOperations.name.value);
                break;
            case 'author':
                file.author = value;
                fileOperations.author.method(value);

                console.log('opa', fileOperations.author.value);
                break;
            case 'size':
                file.fileSize = value;
                fileOperations.size.method(value);

                console.log('opa', fileOperations.size.value);
                break;
            case 'type':
                file.fileType = value;
                fileOperations.type.method(value);

                console.log('opa', fileOperations.type.value);
                break;
            case 'path':
                file.filePath = value;
                fileOperations.path.method(value);
                
                console.log('opa', fileOperations.author.value);
                break;
            default:
                console.log('Unknown input field');
        }
    }

    const handleSaveHTML = () => {
        if (!file) return;
        
        const htmlContent = `
            <table>
                <tbody>
                    <tr>
                        <th> Name: </th>
                        <td>${file.name}</td>
                    </tr>
                    <tr>
                        <th> Author: </th>
                        <td>${file.author}</td>
                    </tr>
                    <tr>
                        <th> Size: </th>
                        <td>${file.fileSize}</td>
                    </tr>
                    <tr>
                        <th> Type: </th>
                        <td>${file.fileType}</td>
                    </tr>
                    <tr>
                        <th> Path: </th>
                        <td>${file.filePath}</td>
                    </tr>
                </tbody>
            </table>
        `;
        
        const blob = new Blob([htmlContent], { type: "text/html" });
        
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement("a");
        a.href = url;
        a.download = "file_info.html";
        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);
        
        // Optionally revoke the URL to free up memory
        URL.revokeObjectURL(url);
        
        console.log('HTML file saved');
    };

    return (
        <div className="container">
            <h2 className="title"> File Info </h2>
            
            {file ? (
                <table>
                    <tbody>
                        <tr>
                            <th> Name: </th>
                            <td>
                                <input onChange={handleUpdateFile} id="name" value={file.name}></input>
                            </td>
                        </tr>

                        <tr>
                            <th> Author: </th>
                            <td>
                                <input onChange={handleUpdateFile} id="author" value={file.author}></input>
                            </td>
                        </tr>

                        <tr>
                            <th> Size: </th>
                            <td>
                                <input onChange={handleUpdateFile} id="size" value={file.fileSize}></input>
                            </td>
                        </tr>

                        <tr>
                            <th> Type: </th>
                            <td>
                                <input onChange={handleUpdateFile} id="type" value={file.fileType}></input>
                            </td>
                        </tr>

                        <tr>
                            <th> Path: </th>
                            <td>
                                <input onChange={handleUpdateFile} id="path" value={file.filePath}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p> No file selected </p>
            )}
            
            <div className="btn-wrapper">
                <button className="save-btn" onClick={handleSaveHTML}> Save .HTML </button>
            </div>
        </div>
    );
}
