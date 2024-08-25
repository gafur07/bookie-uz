import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/auth.slice";
import buyBook from "./buyBook/buybook.slice"
import cart from "./cart/cart.slice";
import favorite from "./favorites/favorites.slice";
import menu from "./menu/menu.slice";

export const rootReducer = combineReducers({
	auth,
	cart,
	favorite,
	buyBook,
	menu,
})