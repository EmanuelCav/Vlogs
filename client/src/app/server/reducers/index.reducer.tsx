import { combineReducers } from "@reduxjs/toolkit";

import user from './user.reducer'
import vlog from './vlog.reducer'
import response from './response.reducer'

const reducers = combineReducers({
    user,
    vlog,
    response
})

export default reducers