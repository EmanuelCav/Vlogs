
import { 
    CREATE_VLOG,
    DELETE_VLOG,
    GET_VLOG,
    LIKE_VLOG,
    MY_VLOGS,
    VLOGS    
} from "../constants/vlog.const";

import { action, initialStateVlogs } from "../../types/server/reducer.props"

const initialState = {
    vlogs: [],
    vlog: {},
    amount: 0
}

const vlogsReducer = (state: initialStateVlogs = initialState, action: action) => {

    switch (action.type) {
        case VLOGS:
            return {
                ...state,
                vlogs: action.payload.vlogs,
                amount: action.payload.amount
            }

        case MY_VLOGS:
            return {
                ...state,
                vlogs: action.payload.vlogs,
                amount: action.payload.amount
            }

        case GET_VLOG:
            return {
                ...state,
                vlog: action.payload
            }

        case CREATE_VLOG:
            return {
                ...state,
                vlogs: [...state.vlogs, action.payload]
            }

        case DELETE_VLOG:
            return {
                ...state,
                vlogs: state.vlogs.filter((vlog: any) => vlog._id !== action.payload)
            }

        case LIKE_VLOG:
            return {
                ...state,
                vlogs: state.vlogs.map((vlog: any) => vlog._id === action.payload._id ? action.payload : vlog)
            }

        default:
            return state;
    }

}

export default vlogsReducer