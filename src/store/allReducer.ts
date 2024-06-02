import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/auth.slice";
import category from "./category/category.slice";
import cart from "./cart/cart.slice";
import latest from "./latest-add/latest.slice";
import mostView from "./trend-books/trendBook.slice";
import myBook from "./my-book/my-book.slice";
import favorite from "./favorites/favorites.slice";
import slug from "./bookSlug/book.slug.slice";

export default combineReducers({
    auth,
    category,
    cart,
    latest,
    mostView,
    myBook,
    favorite,
    slug,
    
})