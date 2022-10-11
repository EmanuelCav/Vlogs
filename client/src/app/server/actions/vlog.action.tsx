import { Dispatch } from "@reduxjs/toolkit";

import { 
    CREATE_VLOG,
    VLOGS
} from "../constants/vlog.const";

import * as vlogApi from '../api/vlog.api'

import { IVlog } from "../../interfaces/Vlogs";

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
        throw(error)
    }

}

export const createVlogAction = (vlogData: IVlog, token: string) => async (dispatch: Dispatch) => {

    try {

        const { data } = await vlogApi.createVlogApi(vlogData, token)

        dispatch({
            type: CREATE_VLOG,
            payload: data
        })
        
    } catch (error) {
        throw(error)
    }

}

