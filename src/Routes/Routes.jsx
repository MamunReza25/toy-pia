import React from 'react';

import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import RootError from '../ErrorPage/RootError';
import HeroPage from '../Pages/HeroPage';
import LoginPage from '../Pages/LoginPage';
import Register from '../Pages/Register';
import Deshboard from '../Pages/Deshboard';
import PrivetRoutes from '../PrivetRoutes/PrivetRoutes';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <RootError></RootError>,
        children: [
            {
                index: true,
                element: <HeroPage></HeroPage>,
            },
            {
                path: '/loginpage',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/deshboard',
                element: <PrivetRoutes>
                    <Deshboard></Deshboard>
                </PrivetRoutes>
            },
        ]
    },
]);