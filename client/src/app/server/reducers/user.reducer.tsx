
import { 
    AUTH,
    LOGOUT,
    USERS,
    USER,
    UPDATE_PROFILE
} from "../constants/user.const";

import { initialStateUser, action } from "../../types/server/reducer.props";

const initialState = {
    users: [],
    user: {},
    getUser: {},
    isLoggedIn: false
}

const userReducer = (state: initialStateUser = initialState, action: action) => {

    switch (action.type) {
        case USERS:
            return {
                ...state,
                users: action.payload
            }

        case USER:
            return  {
                ...state,
                getUser: action.payload
            }

        case AUTH:
            localStorage.setItem("auth-data", action.payload.token)
            return {
                ...state,
                user: action?.payload,
                isLoggedIn: true
            }

        case LOGOUT:
            localStorage.removeItem("auth-data")
            return {
                ...state,
                user: {},
                isLoggedIn: false,
                getUser: {},
                users: []
            }

        case UPDATE_PROFILE:
            return {
                ...state,
                getUser: action.payload
            }
    
        default:
            return state;
    }

}

export default userReducer