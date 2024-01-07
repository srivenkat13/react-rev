import React from "react";

import Button from "./Button.jsx";
const App = () => {
  const handleClickPar =() => {
    alert(' clicked from Parent component')
  }
  return  <>
     <Button clickAction= {handleClickPar} data = "Click me"/>
    
  </>
};

export { App };
