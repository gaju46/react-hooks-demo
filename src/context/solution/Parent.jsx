import React from "react";
import Child from "./Child";

function Parent() {
  console.log("Parent Component....");
  return (
    <div>
      <h1>Parent Component</h1>
      <Child />
    </div>
  );
}

export default Parent;
