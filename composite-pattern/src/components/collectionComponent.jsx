import React, { useState, useEffect } from "react";
import { DocumentComponent } from "./documentComponent";

export const CollectionComponent = ({ docs }) => {
    const [activeFile, setActiveFile] = useState(0);

    useEffect(() => {
        console.log('activeFile:', activeFile);
    }, [activeFile]);

    return (
        <div className="main"> 
            <div className="container">
                <h2> Files List </h2>
                
                <div className="display">
                    <ul>
                        {Object.values(docs).map((doc, index) => (
                            <li key={index}>
                                <button
                                    onClick={(e) => {
                                        console.log('Selected index:', e.target.id);
                                        let index = Number(e.target.id) + 1;
                                        setActiveFile(index);
                                    }}
                                    className="li-btn"
                                    id={index}
                                >

                                    <img src="https://64.media.tumblr.com/0a8c1050bcb86fb9080622b1b6e47a05/404a45651ed80451-54/s540x810/d83a7a23ae7019b498ca4a01cf1c21870ee21ca0.png" alt='list-img'></img>
                                    {`${doc.name}${doc.fileType}`}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <DocumentComponent file={docs[activeFile]} />

        </div>
    )
}

export default CollectionComponent;
