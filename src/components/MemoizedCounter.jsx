import React, { useState, useMemo } from "react";
function expensiveCalc(num) {
  console.log("Performing expensive calculation...");
  const startTime = performance.now();
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += num * i;
  }
  const endTime = performance.now();
  console.log(`time take is ${(endTime - startTime).toFixed(2)} milliseconds`);
  return result;
}
export const MemoizedCounter = () => {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);
  const result = useMemo(() => expensiveCalc(num), [num]);
  //   const result = expensiveCalc(num);
  return (
    <div>
      <h4>Counter with expensive calculation </h4>
      <p> calculation result:{result}</p>
      <p> count : {count}</p>
      <button onClick={() => setNum(num + 1)}>Increment Number</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};
