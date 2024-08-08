import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  console.log("Child Component...");

  return (
    <div>
      <h1>Child Component</h1>
      <GrandChild />
    </div>
  );
}

export default Child;
