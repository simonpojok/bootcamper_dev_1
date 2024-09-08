import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignUpPage from "./pages/signup/SignUpPage.jsx";
import BootcampFeedsPage from "./pages/feeds/BootcampFeedsPage.jsx";

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
])

function App() {

    return (
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    )
}

export default App
