import { Route, Routes} from "react-router-dom";
import { routes, allRoutes } from "./routes/routes";
import { Layout } from "./components/layout";
import { NotFound } from "./components/screens";
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
