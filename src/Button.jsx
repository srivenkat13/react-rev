import React from "react";

const Button = (props) => {
  const { data, clickAction } = props;
  const handleClick = () => {
    clickAction?.();
  };
  return <button onClick={handleClick}>{props.data}</button>;
};

export default Button;
