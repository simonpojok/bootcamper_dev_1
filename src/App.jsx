import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/signup/SignUpPage.jsx";
import BootcampFeedsPage from "./pages/feeds/BootcampFeedsPage.jsx";
import HomeDashboard from "./pages/dashboard/HomeDashboard.jsx";
import Login from "./pages/Login.jsx";

import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import ErrorPage from './pages/feeds/ErrorPage.jsx';

const router = createBrowserRouter([
  {
     path: '/',
     element: <BootcampFeedsPage/>,
     errorElement: <ErrorPage/>,
     // exact: true,
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
    path: "/login",
    element: <Login />,
    exact: true,
  },
  {
    path: "/updateProfile",
    element: <UpdateProfile />,
    exact: true,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
