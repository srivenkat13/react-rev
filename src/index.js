import React from "react";
import ReactDOM  from "react-dom/client";

const firstChild = React.createElement("p", { key: "dsaf" }, "First Child");
const secondChild = React.createElement("p", { key: "djfk" }, "second Child");

const div2 = <div className="text" >Hello from react with webpack</div>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div2);

