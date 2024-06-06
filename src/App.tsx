import { Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { routes } from "./Routes/routes";
import { NotFound } from "./screen/NotFound/NotFound";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((item: any) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
