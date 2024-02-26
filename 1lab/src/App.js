import React from "react";
import './App.css';

// importing components 
import { InputsComponent } from "./components/InputComponent";
import { FactoryComponent } from "./components/FactoryComponent";


function App() {
  return (
    <div className='body'>
      <div className="container">

        <InputsComponent />

        <FactoryComponent />

      </div>
    </div>
  )
}

export default App;
