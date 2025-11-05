import React from 'react';
import { Link } from 'react-router';
import errorImg from '../assets/errorimg.png';

const RootError = () => {
    return (
        <div className="h-screen  flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${errorImg})` }}>
            <title>ErrorPage-404</title>
            <h1 className="text-9xl font-extrabold text-red-600">404</h1>
            <h2 className="text-5xl font-bold mt-2   text-white">
                Page Not Found
            </h2>
            <p className="text-2xl font-bold text-white mt-2 max-w-md">
                Sorry, the page you're looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-6 font-bold inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default RootError;
