import React, { useState } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import Dimensions from "./Dimensions.jsx";
import Chat from "./Chat.jsx";
import { ParentComponent } from "./useCallback/ParentComponent.jsx";
import TodoList from "./useCallback/TodoList.jsx";
import { Link } from "react-router-dom";
import "./components/Sidenav.css";

const Home = () => {
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

  const [timer, toggleTimer] = useState(false);
  return (
    <>
      <div className="main-content">
        {timer && <Timer />}
        <br />

        <button
          onClick={() => {
            toggleTimer(!timer);
          }}
        >
          Toggle Timer
        </button>

        <Button
          data="hello"
          clickAction={() => {
            console.log("Clicked");
          }}
        />

        <Dimensions />
        <Chat />

        <h2>useCallback hook</h2>
        <ParentComponent />
        <TodoList />
      </div>
    </>
  );
};

export { Home };
