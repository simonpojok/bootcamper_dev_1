import React, { createContext, useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/signup/SignUpPage.jsx";
import BootcampFeedsPage from "./pages/feeds/BootcampFeedsPage.jsx";
import HomeDashboard from "./pages/dashboard/HomeDashboard.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import Login from "./pages/Login.jsx";

const initialState = {
  userToken: null,
};

const reducer = (state, action) => {
  // console.log("action reducer", action);
  // console.log("state reducer", state);
  switch (action.type) {
    case "SET_USER_TOKEN":
      // console.log('payload', action.payload)
      return {
        ...state,
        userToken: action.payload,
      };
    case "REMOVE_USER_TOKEN":
      return {
        ...state,
        userToken: null,
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // const userToken = localStorage.getItem("authToken");

  const [state, dispatch] = useReducer(reducer, initialState);
console.log("state provider", state);
  const setUserToken = (token) => {
    dispatch({ type: "SET_USER_TOKEN", payload: token });
    // if(token){
    //   localStorage.setItem("authToken", token);
    // } else {
    //   localStorage.removeItem("authToken");
    // }
  }

  return (
    <AppContext.Provider value={{
      userToken: state.userToken,
      setUserToken
    }}>
      {children}
    </AppContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <BootcampFeedsPage />,
    exact: true,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
    exact: true,
  },
  {
    path: "/dashboard",
    element: <HomeDashboard />,
    exact: true,
  },
  {
    path: "/updateProfile",
    element: <UpdateProfile />,
  },
  {
    path: "/login",
    element: <Login />,
    exact: true,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </React.StrictMode>
  );
}

export default App;
