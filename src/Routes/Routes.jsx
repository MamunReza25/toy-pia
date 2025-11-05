import React from 'react';

import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import RootError from '../ErrorPage/RootError';
import LoginPage from '../Pages/LoginPage';
import Register from '../Pages/Register';
import PrivetRoutes from '../PrivetRoutes/PrivetRoutes';
import Home from '../Pages/Home'
import Profile from '../Pages/Profile';
import PopularToys from '../Pages/PopularToys';
import ToyDetailesPage from '../Pages/ToyDetailesPage';
import HomePageLayout from '../Pages/HomePageLayout';
import MyToys from '../Pages/MyToys';
import Forget from '../Pages/Forget';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <RootError></RootError>,
        children: [
            {
                index: true,
                Component: HomePageLayout,
            },
            {
                path: '/loginpage',
                element: <LoginPage></LoginPage>
            },

            {
                path: 'popularToys',
                element: <PopularToys></PopularToys>
            },
            {
                path: '/forgetpass',
                element: <Forget></Forget>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/toydetails/:id',
                element: <PrivetRoutes>
                    <ToyDetailesPage></ToyDetailesPage>

                </PrivetRoutes>


            },
            {
                path: '/profile',
                element: <PrivetRoutes>
                    <Profile></Profile>

                </PrivetRoutes>


            },
            {
                path: '/mytoys',
                element: <PrivetRoutes>
                    <MyToys></MyToys>

                </PrivetRoutes>


            },


        ]
    },
]);