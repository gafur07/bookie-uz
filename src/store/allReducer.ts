import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/aut.slice";
import categoryReducer from "./category/category.slice";
import cartReducer from "./cart/cart.slice";
import latestReducer from "./latest-add/latest.slice";
import trendBookReducer from "./trend-books/trendBook.slice";
import myBookReducer from "./my-book/my-book.slice";
import favoritesReducer from "./favorites/favorites.slice";

export default combineReducers({
    auth: authReducer,
    category: categoryReducer,
    cart: cartReducer,
    latest:  latestReducer,
    mostView: trendBookReducer,
    myBook: myBookReducer,
    favorite: favoritesReducer
})