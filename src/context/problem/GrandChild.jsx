import React from "react";

function GrandChild({ user, setUser }) {
  console.log("GrandChild Component");

  const handleChangeName = () => {
    setUser({ name: "Updated Name" });
  };

  return (
    <div>
      <h1>GrandChild Component</h1>
      <p>User Name: {user.name}</p>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default GrandChild;
              