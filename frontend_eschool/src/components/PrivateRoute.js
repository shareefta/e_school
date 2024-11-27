import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem('token'); // Or your auth logic

    return isAuthenticated ? <Outlet /> : <Navigate to="/adminlogin" />;
};

export default PrivateRoute;
