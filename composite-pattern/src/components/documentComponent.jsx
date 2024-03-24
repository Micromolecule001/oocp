import React from "react";

export const DocumentComponent = ({ name, author, fileSize, fileType, filePath }) => {

    return (
        <div className="main">
            <div className="container">
                <h2 className="title" >
                    File Info
                </h2>

                <table>
                    <tbody>
                    <tr>
                        <th> Name: </th>
                        <td>
                            <input id='name' value={ name } ></input>
                        </td>
                    </tr>

                    <tr>
                        <th> Author </th>
                        <td>
                            <input id='author' value={ author }></input>
                        </td>
                    </tr>

                    <tr>
                        <th> Size </th>
                        <td>
                            <input id='size' value={ fileSize }></input>
                        </td>
                    </tr>

                    <tr>
                        <th> Type </th>
                        <td>
                            <input id='type' value={ fileType }></input>
                        </td>
                    </tr>

                    <tr>
                        <th> Path </th>
                        <td>
                            <input id='path' value={ filePath }></input>
                        </td>
                    </tr>
                    </tbody>
                </table>
                
                <div className="btn-wrapper">
                    <button className="save-btn" onClick={console.log('file saved')}> Save .HTML </button>
                    <button className="update-btn" onClick={console.log('file udated')}> Update Info </button>
                </div>
            </div>
        </div>
    )
}
