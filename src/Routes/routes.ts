import { Cart, Favorites, Home, Login, MyBooks, Register, CategoryBooks, Book, AudioBook, Payment } from "@/screen"

export {
    Login,
    Register,
    
} from "@/screen";

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
    },
    {
        path: "/book/:slug",
        element: Book
    },
    {
        path: "/audiobook/:slug",
        element: AudioBook
    },
    {
        path: "/payment",
        element: Payment
    }
]