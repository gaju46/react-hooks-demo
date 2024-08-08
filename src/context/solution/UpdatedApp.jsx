import React from "react";
import { UserProvider } from "./UserContext";
import Parent from "./Parent";

function App() {
  console.log("App Component...");

  return (
    <UserProvider>
      <div>
        <Parent />
      </div>
    </UserProvider>
  );
}

export default App;
