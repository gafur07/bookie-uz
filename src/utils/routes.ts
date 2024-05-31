import Login from "@/screen/Auth/Login/Login";
import Register from "@/screen/Auth/Register/Register";
import Cart from "@/screen/Cart/Cart";
import CategoryBooks from "@/screen/CategoryBooks/CategoryBooks";
import Favorites from "@/screen/Favorites/Favorites";
import Home from "@/screen/Home/Home";
import MyBooks from "@/screen/MyBooks/MyBooks";

export const routes = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/login",
        element: Login
    },
    {
        path: "/register",
        element: Register
    },
    {
        path: "/category/:name",
        element: CategoryBooks
    },
    {
        path: "/cart",
        element: Cart
    },
    {
        path: "/my-books",
        element: MyBooks
    },
    {
        path: "/favorites",
        element: Favorites
    }
]