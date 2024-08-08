// import React, { useRef } from "react";

// const UseRefHook = () => {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef?.current?.focus();
//   };

//   return (
//     <div>
//       <h2>useRef Hook</h2>
//       <input type="text" />
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// };

// export default UseRefHook;

import React, { useState, useRef, useEffect } from "react";

const UseRefHook = () => {
  // 1. Create a ref to store the input element
  const inputRef = useRef(null);

  // 2. Create a ref to store a mutable value
  const countRef = useRef(0);

  // 3. State for managing display count
  const [displayCount, setDisplayCount] = useState(0);

  // 4. Function to focus the input field
  const focusInput = () => {
    if (inputRef.current) {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  // 5. Function to increment countRef and update displayCount
  const incrementCount = () => {
    countRef.current += 1;
    setDisplayCount(countRef.current);
  };

  // 6. Example of using useEffect with a timer
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     incrementCount();
  //   }, 1000);

  //   // Cleanup the interval on component unmount
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <h1>useRef Example</h1>
      <input
        type="text"
        ref={inputRef} // Attach ref to the input element
        placeholder="Focus me with button"
      />
      <button onClick={focusInput}>Focus Input</button>
      <p>Count: {displayCount}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default UseRefHook;
