import React from "react";
import Child from "./Child";

function Parent({ user, setUser }) {
  console.log("Parent Component");

  return (
    <div>
      <h1>Parent Component</h1>
      <Child user={user} setUser={setUser} />
    </div>
  );
}

export default Parent;
