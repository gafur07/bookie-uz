import { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const RouterProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<BrowserRouter>
			{children}
		</BrowserRouter>
	);
};

export { RouterProvider };
