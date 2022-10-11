import { Dispatch } from "@reduxjs/toolkit";

import { 
    AUTH, 
    LOGOUT, 
    USERS
} from '../constants/user.const'

import * as userApi from '../api/user.api'

import { IUserL, IUserR } from '../../interfaces/User'

export const usersAction = (token: string, email: string) => async (dispatch: Dispatch) => {

    try {

        const { data } = await userApi.usersApi(token, email)

        dispatch({
            type: USERS,
            payload: data
        })
        
    } catch (error) {
        throw(error)
    }

}

export const loginAction = (userData: IUserL, navigate: any) => async (dispatch: Dispatch) => {

    try {

        const { data } = await userApi.loginApi(userData)

        dispatch({
            type: AUTH,
            payload: data
        })

        navigate('/main')
        
    } catch (error) {
        throw(error)
    }

}

export const registerAction = (userData: IUserR, navigate: any) => async (dispatch: Dispatch) => {

    try {

        const { data } = await userApi.registerApi(userData)

        console.log(data);
        

        dispatch({
            type: AUTH,
            payload: data
        })

        navigate('/main')
        
    } catch (error) {
        throw(error)
    }

}

export const logout = () => async (dispatch: Dispatch) => {

    try {

        dispatch({
            type: LOGOUT,
            payload: false
        })
        
    } catch (error) {
        throw(error)
    }

}
