import { useReducer } from "react";
const initalState = { count: 0 };

const CountReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      throw new Error("no such action");
  }
};

export const ReducerCounter = () => {
  const [state, disptach] = useReducer(CountReducer, initalState);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => disptach({ type: "INC" })}>UP</button>
      <button onClick={() => disptach({ type: "DEC" })}>DOWN</button>
      <button onClick={() => disptach({ type: "RESET" })}>Reset</button>
    </>
  );
};
