
import { 
    AUTH,
    LOGOUT,
    USERS
} from "../constants/user.const";

import { initialStateUser, action } from "../../types/server/reducer.props";

const initialState = {
    users: [],
    user: {},
    isLoggedIn: false
}

const userReducer = (state: initialStateUser = initialState, action: action) => {

    switch (action.type) {
        case USERS:
            return {
                ...state,
                users: action.payload
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
                isLoggedIn: false
            }
    
        default:
            return state;
    }

}

export default userReducer