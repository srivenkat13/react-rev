import { useState, useEffect, useRef, useContext } from "react";
import "./Sidenav.css";
import ThemeProvider, { ThemeContext } from "./ThemeContext";
import { ReducerCounter } from "./ReducerCounter";
import { MemoizedCounter } from "./MemoizedCounter";
import { DatawithLoading } from "./HOC/DatawithLoading";
export const Practice = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState(null);
  const [param, setParam] = useState(1);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async (param) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${param}`
        );
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
      }
    };
    fetchPosts(param);
  }, [param]);

  const handleFocus = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  if (!toggleTheme) {
    console.error("ThemeContext is not properly provided.");
    return null;
  }
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      <h2 style={{ color: "#a1a1a1" }} className="main-content">
        Practice
      </h2>
      {/* USE STATE HOOK */}
      <div className="border">
        <h3 className="heading">Use State</h3>
        <p style={{ fontWeight: 900 }}> Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      {/* USE EFFECT HOOK */}
      <div
        className="border"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3 className="heading">Use Effect</h3>{" "}
        {posts ? (
          <>
            {" "}
            <p style={{ fontWeight: 600 }}>{posts.title}</p>
            <p style={{ width: "50%" }}>{posts.body}</p>
          </>
        ) : (
          <p>No posts</p>
        )}
        <button onClick={() => setParam(param + 1)}>next post</button>
      </div>
      {/* USE REF HOOK */}
      <div className="border">
        <h3 className="heading">Use Ref</h3>
        <p style={{ fontWeight: 900 }}> Click to focus </p>
        <input
          name="username"
          type="text"
          ref={inputRef}
          placeholder="username"
        />
        <button onClick={handleFocus}>focus</button>
      </div>
      {/* USE CONTEXT HOOK */}
      <div className="border">
        <h3 className="heading">Use Context</h3>
        <p>Current theme : {theme}</p>

        <button onClick={toggleTheme}>Change Theme</button>
      </div>
      {/* USE REDUCER HOOK*/}
      <div className="border">
        <h3 className="heading">Use Reducer</h3>
        <ReducerCounter />
      </div>
      {/* USE MEMO HOOK*/}
      <div className="border">
        <h3 className="heading">Use Memo</h3>
        <MemoizedCounter />
      </div>
      {/* HOC */}
      <div className="border">
        <h3 className="heading">Higher Order Component</h3>
        <DatawithLoading />
      </div>
    </div>
  );
};
