import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

const Chat = () => {
  const [messages, setMessage] = useState([]);
  const [headerStyle, setHeaderStyle] = useState({});
  const chatBoxRef = useRef(null);
  const headerRef = useRef(null);
  const exampleMessages = [
    "Hello!",
    "How are you?",
    "What's new?",
    "Have you seen the latest news?",
    "Let's catch up soon.",
    "Did you watch the game last night?",
    "Check out this cool article.",
    "Good morning!",
    "Have a great day!",
    "See you later!",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prev) => [
        ...prev,
        `New Message  ${prev.length + 1} : ${
          exampleMessages[Math.floor(Math.random() * exampleMessages.length)]
        } `,
      ]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useLayoutEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  useLayoutEffect(() => {
    const chatBox = chatBoxRef.current;

    const handleScroll = () => {
      if (chatBox) {
        const halfWay = chatBox.scrollHeight / 2;
        if (chatBox.scrollTop > halfWay) {
          setHeaderStyle({ backgroundColor: "lightred" });
        } else {
          setHeaderStyle({ backgroundColor: "lightblue" });
        }
      }
    };
    if (chatBox) {
      chatBox.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (chatBox) {
        chatBox.removeEventListener("scroll", handleScroll);
      }
    };
  }, [messages]);
  return (
    <>
      <h4 style={{ textAlign: "center" }}>Chats</h4>

      <div
        ref={chatBoxRef}
        style={{
          border: `1px solid gray`,
          height: `200px`,
          overflowY: "auto",
          padding: `10px`,
          position: "relative",
        }}
      >
        <div
          ref={headerRef}
          style={{
            padding: "2px",
            position: "sticky",
            zIndex: 1,
            top: 0,
            borderBottom: "0.5px solid gray",
            ...headerStyle,
          }}
        >
          {messages && (
            <p style={{ textAlign: "center" }}>
              {messages.length} messages are recieved
            </p>
          )}
        </div>
        {messages.map((msg, index) => {
          return (
            <div
              key={index}
              style={{
                border: `0.5px dashed gray`,
                padding: "5px",
                marginBottom: "4px",
              }}
            >
              {" "}
              {msg}{" "}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Chat;
