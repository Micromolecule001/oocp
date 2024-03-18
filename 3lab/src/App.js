import React from "react";
import './App.css';

// importing components 
import { InputsComponent } from "./components/inputComponent.js";
import { SearchComponent } from "./components/searchComponent.js";
import { FolderMethods } from "./components/folderMethods.js";

function App() {
  return (
    <div className='body'>
      <div className="container">

        <InputsComponent />

        <br></br>

        <FolderMethods />

        <br></br>

        <SearchComponent />
      </div>
    </div>
  )
}

export default App;
