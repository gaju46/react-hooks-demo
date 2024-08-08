// import React, { useState, useMemo } from "react";

// const UseMemoHook = () => {
//   const [count, setCount] = useState(0);

//   const expensiveComputation = useMemo(() => {
//     return count * 2;
//   }, [count]);

//   return (
//     <div>
//       <h2>useMemo Hook</h2>
//       <p>Count: {count}</p>
//       <p>Expensive Computation: {expensiveComputation}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// // export default UseMemoHook;

// import React, { useState, useMemo } from "react";

// const factorial = (n) => {
//   console.log("Calculating factorial...");
//   if (n <= 0) return 1;
//   return n * factorial(n - 1);
// };

// const FactorialComponent = () => {
//   const [number, setNumber] = useState(1);
//   const [randomValue, setRandomValue] = useState(0);

//   const factorialResult = useMemo(() => factorial(number), [number]);

//   return (
//     <div>
//       <h1>Factorial Calculator</h1>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
//       />
//       <p>Factorial: {factorialResult}</p>
//       <button onClick={() => setRandomValue(Math.random())}>
//         Re-render Component
//       </button>
//     </div>
//   );
// };

// export default FactorialComponent;

import React, { useState, useMemo } from "react";

function ExpensiveCalculation() {
  // Simulate an expensive calculation
  const calculate = (num) => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.random() * num;
    }
    return result;
  };

  const [number, setNumber] = useState(0);

  // Memoize the expensive calculation
  const result = useMemo(() => calculate(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Result: {result}</p>
    </div>
  );
}

// import React, { useState, useMemo } from "react";

// const List = ({ items }) => {
//   const [search, setSearch] = useState("");

//   // memoize the filtered list
//   const filteredItems = useMemo(() => {
//     // filter the items by the search term
//     return items.filter((item) =>
//       item.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [items, search]); // only recompute when items or search change

//   return (
//     <div>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search..."
//       />
//       <ul>
//         {filteredItems.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default ExpensiveCalculation;
