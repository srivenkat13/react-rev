import React, { useEffect, useState } from "react";

const Timer = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Counter Started`);
      setCounter((prev) => prev + 1);
    }, 1000);
    console.log(`Timer is running with id:`, interval);

    return () => {
      console.log(`Timer Stopped !! of id ${interval}`);
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h1>Timer</h1>
      <p>The Current time is {counter}</p>
    </>
  );
};

export default Timer;
