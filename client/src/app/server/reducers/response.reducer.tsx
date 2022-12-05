import {
    ERROR_CREATE,
    ERROR_LOGIN,
    ERROR_REGISTER,
    SUCCESS_CREATE,
    LOADING
} from "../constants/response.const";

import { action, initialStateResponse } from "../../types/server/reducer.props";

const initialState: initialStateResponse = {
    errorLogin: "",
    errorRegister: "",
    errorCreate: "",
    successRemove: "",
    loading: false
}

const responseReducer = (state: initialStateResponse = initialState, action: action) => {
    switch (action.type) {
        case ERROR_LOGIN:
            return {
                ...state,
                errorLogin: action.payload,
                errorRegister: "",
                errorCreate: "",
                successRemove: "",
                loading: false
            }

        case ERROR_REGISTER:
            return {
                ...state,
                errorLogin: "",
                errorRegister: action.payload,
                errorCreate: "",
                successRemove: "",
                loading: false
            }

        case ERROR_CREATE:
            return {
                ...state,
                errorLogin: "",
                errorRegister: "",
                errorCreate: action.payload,
                successRemove: "",
                loading: false
            }

        case SUCCESS_CREATE:
            return {
                ...state,
                errorLogin: "",
                errorRegister: "",
                errorCreate: "",
                successRemove: action.payload,
                loading: false
            }

        case LOADING:
            return {
                ...state,
                errorLogin: "",
                errorRegister: "",
                errorCreate: "",
                successRemove: "",
                loading: action.payload
            }

        default:
            return state;
    }
}

export default responseReducer