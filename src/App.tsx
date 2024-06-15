import { Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import { routes, allRoutes } from "./routes/routes";
import { NotFound } from "./components/screens/NotFound/NotFound";
import { useAppSelector } from "./hooks";

function App() {
  const token = useAppSelector(state => state.auth.token)
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {(token ? allRoutes : routes).map(({ path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={element}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
