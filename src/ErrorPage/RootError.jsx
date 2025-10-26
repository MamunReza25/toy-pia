import React from 'react';
import { Link } from 'react-router';

const RootError = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <title>ErrorPage-404</title>
            <h1 className="text-7xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl font-semibold mt-2 text-gray-800">
                Page Not Found
            </h2>
            <p className="text-gray-600 mt-2 max-w-md">
                Sorry, the page you're looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default RootError;
