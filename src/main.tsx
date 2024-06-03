import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { AntdProvider } from "./providers/index.ts";
import { QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";

import "./index.scss";


const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: 1,
      retryDelay: 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <AntdProvider>
          <App />
        </AntdProvider>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
