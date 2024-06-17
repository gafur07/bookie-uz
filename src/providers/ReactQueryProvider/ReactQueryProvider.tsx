import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

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

const ReactQueryProvider: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
  );
};

export { ReactQueryProvider };
