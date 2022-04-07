import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer";
import { navReducer } from "./navReducer";

const rootReducer = combineReducers({
    modal: modalReducer,
    nav: navReducer
})

export default rootReducer