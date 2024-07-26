import React, { useLayoutEffect, useRef, useState } from "react";

const Dimensions = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, []);
  return (
    <>
      <div
        ref={divRef}
        style={{ width: "200px", height: "50px", backgroundColor: "salmon" }}
      >
        Sample Div for Measurement
      </div>
      <p>Div width: {size.width}px</p>
      <p>Div height: {size.height}px</p>
    </>
  );
};

export default Dimensions;
