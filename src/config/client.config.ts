import { QueryClient } from "@tanstack/react-query";

export const GOOGLE_CLIENT_ID = "790566328394-a6j02p3pgp6hcckpe6api7mlammsacn2.apps.googleusercontent.com";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: Infinity,
			retry: 1,
			retryDelay: 1000,
		},
	},
});
