import React, { useState } from "react";
import Parent from "./Parent";

function App() {
  const [user, setUser] = useState({ name: "Samir Alam" });
  console.log("App Component");

  return (
    <div>
      <Parent user={user} setUser={setUser} />
    </div>
  );
}

export default App;
