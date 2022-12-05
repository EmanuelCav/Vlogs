import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

    const { user } = useSelector((state: any) => state)    

    return localStorage.getItem("auth-data") === user.user.token ? <Outlet /> : <Navigate to="/" />
            
}

export default PrivateRoute