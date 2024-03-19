import React from "react";
import './App.css';

// importing components 
import { InputsComponent } from "./components/inputComponent.js";
import { FoldersComponent } from "./components/foldersСomponent.js";
import { useFolderState } from "./components/folder/folderState.js"

function App() {
  const folderState = useFolderState();

  return (
    <div className='body'>
      <div className="container">
        <InputsComponent folderState={folderState} />
        <br></br>
        <FoldersComponent folderState={folderState} />
        <br></br>
        
      </div>
    </div>
  )
}

export default App;
