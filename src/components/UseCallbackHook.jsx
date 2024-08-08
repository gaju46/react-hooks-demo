// demonstration for useCallback hook

import { useState, useCallback } from "react";

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  const clickHandler = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div>Use Callback demo</div>
      <div>Count: {count}</div>

      <button onClick={clickHandler}>Increment</button>
    </>
  );
};

export default UseCallbackHook;

// // more advanced example

// import React, { useState, useCallback } from "react";

// function ParentComponent() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <ChildComponent increment={increment} />
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// function ChildComponent({ increment }) {
//   // Child component will only re-render if increment changes
//   return (
//     <div>
//       <button onClick={increment}>Increment from Child</button>
//     </div>
//   );
// }
