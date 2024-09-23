/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  authToken: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateToken":
      return { ...state, authToken: action.payload };

    default:
      throw new Error("Unknown action");
  }
};

function AppProvider({ children }) {
  const [{ authToken }, dispatch] = useReducer(reducer, initialState);

  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem("authToken", token);
      dispatch({ type: "updateToken", payload: token });
    } else {
      localStorage.removeItem("authToken");
    }
  };

  return (
    <AppContext.Provider value={{ dispatch, setUserToken, authToken }}>
      {children}
    </AppContext.Provider>
  );
}

//This eradicates the need to import both "useContext" and the Context "AppContext",
// to access the shared values, all values can be gotten form calling the "useApp" hook.
function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("Context is being used outside Provider");
  return context;
}

export { AppProvider, useApp };
