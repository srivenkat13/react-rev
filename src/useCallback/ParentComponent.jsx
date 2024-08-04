import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent.jsx";

export const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const logCount = useCallback(() => {
    console.log(`Current counter : ${count}`);
  }, [count]);
  return (
    <>
      <h1>Count :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <br />
      <ChildComponent logCount={logCount} />
    </>
  );
};
