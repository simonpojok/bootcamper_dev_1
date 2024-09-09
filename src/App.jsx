import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignUpPage from "./pages/signup/SignUpPage.jsx";
import BootcampFeedsPage from "./pages/feeds/BootcampFeedsPage.jsx";
import HomeDashboard from "./pages/dashboard/HomeDashboard.jsx";
import ForgotPassword from './pages/forgotpassword/ForgotPassword.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <BootcampFeedsPage/>,
        exact: true,
    },
    {
        path: '/sign-up',
        element: <SignUpPage/>,
        exact: true,
    },
    {
        path: '/dashboard',
        element: <HomeDashboard/>,
        exact: true,
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />,
        exact: true,
    }
])

function App() {

    return (
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    )
}

export default App
