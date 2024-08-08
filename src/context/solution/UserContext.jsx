// UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Samir Alam" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}

      {/* <div>
        <Parent />x
      </div> */}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
