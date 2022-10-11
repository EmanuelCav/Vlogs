
import { 
    CREATE_VLOG,
    VLOGS    
} from "../constants/vlog.const";

import { action, initialStateVlogs } from "../../types/server/reducer.props"

const initialState = {
    vlogs: []
}

const vlogsReducer = (state: initialStateVlogs = initialState, action: action) => {

    switch (action.type) {
        case VLOGS:
            return {
                ...state,
                vlogs: action.payload.vlogs
            }

        case CREATE_VLOG:
            return {
                ...state,
                vlogs: [...state.vlogs, action.payload]
            }

        default:
            return state;
    }

}

export default vlogsReducer