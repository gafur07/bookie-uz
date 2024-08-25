import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routes, allRoutes } from "@/routes";
import { useAppSelector } from "@/hooks";
import { Layout } from "./components/Layout";

const App: FC = () => {
	const token = useAppSelector((state) => state.auth.token);
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{(token ? allRoutes : routes).map(({ path, element }, index) => (
					<Route key={index} path={path} element={element} />
				))}
			</Route>
		</Routes>
	);
};

export default App;
