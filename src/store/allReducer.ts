import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/auth.slice";
import cart from "./cart/cart.slice";
import favorite from "./favorites/favorites.slice";

export default combineReducers({
    auth,
    cart,
    favorite,
    
})