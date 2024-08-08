import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(true);
  // if (true) {
  // }

  const countHandler = () => {
    count + 1;
    // setCount(count + 1);
    setIsTrue(!isTrue);
  };

  console.log(count);

  return (
    <div>
      <h1>useState Hook</h1>
      <p>Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={countHandler}>Increment</button>
    </div>
  );
};

export default UseStateHook;
