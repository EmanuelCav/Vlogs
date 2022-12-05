import { Dispatch } from "@reduxjs/toolkit";

import { 
    AUTH, 
    LOGOUT, 
    USERS,
    USER,
    UPDATE_PROFILE
} from '../constants/user.const'

import * as userApi from '../api/user.api'

import { IUserL, IUserR } from '../../interfaces/User'
import { ERROR_LOGIN, ERROR_REGISTER, LOADING } from "../constants/response.const";

export const usersAction = (token: string, email: string) => async (dispatch: Dispatch) => {

    try {

        const { data } = await userApi.usersApi(token, email)

        dispatch({
            type: USERS,
            payload: data
        })
        
    } catch (error) {
        throw error
    }

}

export const getUserAction = (id: number, token: string) => async (dispatch: Dispatch) => {

    try {

        const { data } = await userApi.getUserApi(id, token)

        dispatch({
            type: USER,
            payload: data
        })
        
    } catch (error) {
        throw error
    }

}

export const loginAction = (userData: IUserL, navigate: any) => async (dispatch: Dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await userApi.loginApi(userData)

        dispatch({
            type: AUTH,
            payload: data
        })

        dispatch({
            type: LOADING,
            payload: false
        })

        navigate('/main')
        
    } catch (error: any) {
        dispatch({
            type: ERROR_LOGIN,
            payload: error.response.data.message
        })
    }

}

export const registerAction = (userData: IUserR, navigate: any) => async (dispatch: Dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await userApi.registerApi(userData)

        dispatch({
            type: AUTH,
            payload: data
        })

        dispatch({
            type: LOADING,
            payload: false
        })

        navigate('/main')
        
    } catch (error: any) {
        dispatch({
            type: ERROR_REGISTER,
            payload: error.response.data.message
        })
    }

}

export const logout = (navigate: any) => async (dispatch: Dispatch) => {

    try {

        dispatch({
            type: LOGOUT,
            payload: false
        })

        navigate('/')
        
    } catch (error) {
        throw error
    }

}

export const updateProfileAction = (userData: any, id: number, token: string) => async (dispatch: Dispatch) => {

    try {

        const { data } = await userApi.updateProfileApi(userData, id, token)

        console.log(data);

        dispatch({
            type: UPDATE_PROFILE,
            payload: data
        })
        
    } catch (error) {
        throw error
    }

}
