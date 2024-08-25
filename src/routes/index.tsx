import {
	AudioBook,
	Book,
	Cart,
	CategoryBooks,
	Donates,
	Faq,
	Favorites,
	ForgotPassword,
	Home, Login,
	MyBooks,
	MyBooksAudio,
	NotFound,
	Payment,
	Processing,
	Register,
} from "@/components/screens";

export {
	Login,
	Register
} from "@/components/screens";

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />
    },
    {
        path: "/category/:name",
        element: <CategoryBooks />
    },
    {
        path: "/book/:slug",
        element: <Book />
    },
    {
        path: "/donates",
        element: <Donates />
    },
    {
        path: "/faq",
        element: <Faq />
    },
    {
        path: "/donates-process",
        element: <Processing />
    },
		{
			path: "/*",
			element: <NotFound />
		},
]

export const allRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/category/:name",
        element: <CategoryBooks />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/my-books",
        element: <MyBooks />
    },
    {
        path: "/favorites",
        element: <Favorites />
    },
    {
        path: "/book/:slug",
        element: <Book />
    },
    {
        path: "/audiobook/:slug",
        element: <AudioBook />
    },
    {
        path: "/my-book-audio/:slug",
        element: <MyBooksAudio />
    },
    {
        path: "/donates",
        element: <Donates />
    },
    {
        path: "/faq",
        element: <Faq />
    },
    {
        path: "/payment",
        element: <Payment />
    },
    {
        path: "/donates-process",
        element: <Processing />
    },
    {
        path: "/*",
        element: <NotFound />
    },

]