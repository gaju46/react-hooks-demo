import React, { createContext, useContext, useState } from "react";
import Parent from "./Parent";

export const UserContext = createContext();

function App() {
  console.log("Raw App Component...");

  return (
    <UserProvider>
      <div>
        <Parent />
      </div>
    </UserProvider>
  );
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Samir Alam" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default App;
