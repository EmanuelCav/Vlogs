// import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";

import reducers from './server/reducers/index.reducer';

const store = configureStore({
    reducer: reducers
})

// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store