import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Aman");

  return (
    <UserContext.Provider value={{ user, setUser }}>
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
