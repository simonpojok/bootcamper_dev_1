import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/signup/SignUpPage.jsx";
import BootcampFeedsPage from "./pages/feeds/BootcampFeedsPage.jsx";
import HomeDashboard from "./pages/dashboard/HomeDashboard.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import Login from "./pages/Login.jsx";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const userToken = localStorage.getItem("authToken");

  const setUserToken = (token) => {
    if(token){
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authToken");
    }
  }

  return (
    <AppContext.Provider value={{
      userToken,
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
