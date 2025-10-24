import React, { use } from 'react';
import { AuthContext } from '../ContextAuth/AuthContext';
import { Navigate } from 'react-router';

const PrivetRoutes = ({ children }) => {
    const { user, lodding } = use(AuthContext);
    if (lodding) {
        return <span className="loading loading-spinner text-success"></span>
    };
    if (user) {
        return children;
    }
    return <Navigate to={'/loginpage'}></Navigate>


};

export default PrivetRoutes;