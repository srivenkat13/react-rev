import { useState, useEffect } from "react";

const useDots = (interval = 500) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 5 ? prevDots + ".." : ""));
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return dots;
};

export default useDots;
