import Login from "@/screen/Auth/Login/Login";
import Register from "@/screen/Auth/Register/Register";
import CategoryBooks from "@/screen/CategoryBooks/CategoryBooks";
import Home from "@/screen/Home/Home";

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
    }
]