import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/aut.slice";

export default combineReducers({
    auth: authReducer,
})