import { GOOGLE_CLIENT_ID } from "@/config";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { FC, ReactNode } from "react";

const GoogleProvider: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
			{children}
		</GoogleOAuthProvider>
	);
};

export { GoogleProvider };
