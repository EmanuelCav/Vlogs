import { combineReducers } from "@reduxjs/toolkit";

import user from './user.reducer'
import vlog from './vlog.reducer'

const reducers = combineReducers({
    user,
    vlog
})

export default reducers