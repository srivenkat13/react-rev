import React from "react";

const ChildComponent = (props) => {
  console.log(`Child Component is Rendered`);
  return (
    <div>
      <button onClick={props.logCount}>Log count</button>
    </div>
  );
};

export default ChildComponent;
