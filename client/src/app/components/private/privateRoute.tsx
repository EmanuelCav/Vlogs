import React from 'react'
import { useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";
import { initialStateUser } from '../../types/server/reducer.props';

const PrivateRoute = () => {

    const { user } = useSelector((state: any) => state)

    return localStorage.getItem("auth-data") === user.user.token ? <Outlet /> : <Navigate to="/" />
            
}

export default PrivateRoute