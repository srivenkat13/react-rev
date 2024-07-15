import React, { useState } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";

const App = () => {
  const handleClickPar = () => {
    alert(" clicked from Parent component");
  };

  const addMoreData = (first) => { 
    setData((prev) =>  [ {id: 'e', text: 'Drona'}, ...prev] )
   }

  const [data, setData] = useState([
    { id: "a", text: "Arjuna" },
    { id: "b", text: "Bheema" },
    { id: "c", text: "Chanakya" },
    { id: "d", text: "Duryodhana" },
  ]);
  return (
    <>
    <h2>Open console to see difference </h2>
    <h3>List with Index as key</h3>
      {data.map((item,index) => {
        return <Text key={index}>{item.text}</Text>;
      })}
      <Button clickAction={addMoreData} data="Add more data" />
    <h3>List with id as key</h3>
      {data.map((item,index) => {
        return <Text key={item.id}>{item.text}</Text>;
      })}
      <Button clickAction={addMoreData} data="Add more data" />
    </>
  );
};

export { App };
