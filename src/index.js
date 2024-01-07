import React from "react";
import ReactDOM from "react-dom/client";

const userStatus = true;
const signedInMsg = "User is Signed In";
const signedOutMSg = "User  Logged out";

const signedInElement = <div>{signedInMsg}</div>;
const signedOutElement = <div>{signedOutMSg}</div>;
const userGreeting = userStatus ? signedInElement : signedOutElement;

const GreetUser = function () {
    return (
        <>
        {userGreeting}
        </>
    )
}

const div2 = <div className="text">Hello from react with webpack</div>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<GreetUser />);
