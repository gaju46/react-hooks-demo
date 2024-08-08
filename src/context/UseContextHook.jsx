import React, { useContext } from "react";
import { CountContext } from "./CountContext";

const UseCountContextHook = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>useContext with CountContext</h2>
      <p>Count from context: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseCountContextHook;
