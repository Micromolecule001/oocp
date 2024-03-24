import React from "react";

export const CollectionComponent = ({ docs }) => {

    /*
    console.log('----- document list component -----');
    console.log(
        'docs: ', docs,'\n',
        'Object.values(docs): ', Object.values(docs),'\n',
        'Object.values(docs).map(): ', Object.values(docs).map((doc, index) => {
            console.log('doc: ', doc, '\n', 'index: ', index)
        })
    );
    */

    return (
        <div className="main">
            <div className="container">
                <h2> Files List </h2>
                
                <div className="display">
                    <ul>
                        {Object.values(docs).map((doc, index) => (
                            <li key={index}>
                                <button className="li-btn">
                                    <img src="https://64.media.tumblr.com/0a8c1050bcb86fb9080622b1b6e47a05/404a45651ed80451-54/s540x810/d83a7a23ae7019b498ca4a01cf1c21870ee21ca0.png" alt='list-img'></img>
                                    {`${doc.name}${doc.type}`}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
