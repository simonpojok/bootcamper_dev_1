import React, {
  createContext,
  useContext,
} from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");

  return (
    <AppContext.Provider value={{
      userToken,
      name:'charles'
    }}>
      {children}
    </AppContext.Provider>
  );
};