import React, { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const UseCustomHook = () => {
  const width = useWindowWidth();

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Window width: {width}px</p>
    </div>
  );
};

export default UseCustomHook;
