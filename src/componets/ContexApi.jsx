import { createContext, useContext, useState } from "react";

const ContextUser = createContext();

export const Provider = ({ children }) => {
  const [userContext, setUserContext] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });
  return <ContextUser.Provider value={[userContext,setUserContext]}>{children}</ContextUser.Provider>;
};

const useUser = () => useContext(ContextUser)

export default useUser