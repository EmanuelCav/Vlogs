import { Dispatch } from "@reduxjs/toolkit";

import {
    CREATE_VLOG,
    DELETE_VLOG,
    GET_VLOG,
    LIKE_VLOG,
    MY_VLOGS,
    VLOGS
} from "../constants/vlog.const";

import * as vlogApi from '../api/vlog.api'
import { ERROR_CREATE, LOADING, SUCCESS_CREATE } from "../constants/response.const";

export const vlogsAction = (token: string) => async (dispatch: Dispatch) => {

    try {

        const { data } = await vlogApi.vlogsApi(token)

        dispatch({
            type: VLOGS,
            payload: {
                vlogs: data.vlogs,
                amount: data.amount
            }
        })

    } catch (error) {
        throw error
    }

}

export const myVlogsAction = (id: number, token: string) => async (dispatch: Dispatch) => {

    try {

        const { data } = await vlogApi.myVlogsApi(id, token)

        dispatch({
            type: MY_VLOGS,
            payload: {
                vlogs: data.vlogs,
                amount: data.amount
            }
        })

    } catch (error) {
        throw error
    }

}

export const getVlogAction = (id: string, token: string) => async (dispatch: Dispatch) => {

    try {

        const { data } = await vlogApi.getVlogApi(id, token)

        dispatch({
            type: GET_VLOG,
            payload: data
        })

    } catch (error) {
        throw error
    }

}

export const createVlogAction = (vlogData: any, token: string, navigate: any) => async (dispatch: Dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await vlogApi.createVlogApi(vlogData, token)

        dispatch({
            type: CREATE_VLOG,
            payload: data
        })

        dispatch({
            type: LOADING,
            payload: false
        })

        navigate(`/main/${data.userId}`)

    } catch (error: any) {
        dispatch({
            type: ERROR_CREATE,
            payload: error.response.data.message
        })
    }

}

export const deleteVlogAction = (id: string, token: string, navigate: any, idUser: number) => async (dispatch: Dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await vlogApi.deleteVlogApi(id, token)

        dispatch({
            type: DELETE_VLOG,
            payload: id
        })

        dispatch({
            type: SUCCESS_CREATE,
            payload: data.message
        })

        dispatch({
            type: LOADING,
            payload: false
        })

        navigate(`/main/${idUser}`)

    } catch (error) {
        throw error
    }

}

export const likeVlogAction = (vlogData: any, id: string, user: any) => async (dispatch: Dispatch) => {

    try {

        const { data } = await vlogApi.likeVlogApi(vlogData, id, user?.token)

        dispatch({
            type: LIKE_VLOG,
            payload: data
        })

    } catch (error) {
        throw error
    }

}

export const unlikeVlogAction = (vlogData: any, id: string, user: any, setIsLike: any) => async (dispatch: Dispatch) => {

    try {

        const { data } = await vlogApi.unlikeVlogApi(vlogData, id, user.token)

        dispatch({
            type: LIKE_VLOG,
            payload: data
        })

        setIsLike(false)

    } catch (error) {
        throw error
    }

}


