import React, { useState } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";

const App = () => {
  const handleClickPar = () => {
    alert(" clicked from Parent component");
  };

  const addMoreData = (first) => {
    setData((prev) => [{ id: "e", text: "Drona" }, ...prev]);
  };

  const [data, setData] = useState([
    { id: "a", text: "Arjuna" },
    { id: "b", text: "Bheema" },
    { id: "c", text: "Chanakya" },
    { id: "d", text: "Duryodhana" },
  ]);

  const [timer, toggleTimer] = useState(true);
  return (
    <>
      {timer && <Timer />}
      <br />

      <button
        onClick={() => {
          toggleTimer(!timer);
        }}
      >
        Toggle Timer
      </button>

      {/* <Button
        data="hello"
        clickAction={() => {
          console.log("Clicked");
        }}
      /> */}
    </>
  );
};

export { App };
