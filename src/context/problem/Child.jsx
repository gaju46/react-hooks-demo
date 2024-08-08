import React from "react";
import GrandChild from "./GrandChild";

function Child({ user, setUser }) {
  console.log("Child Component");

  return (
    <div>
      <h1>Child Component</h1>
      <GrandChild user={user} setUser={setUser} />
    </div>
  );
}

export default Child;
