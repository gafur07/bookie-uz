import { ConfigProvider } from "antd";
import { FC, ReactNode } from "react";

const AntdProvider: FC<{ children: ReactNode }> = ({ children }) => (
	<ConfigProvider
		componentSize='large'
		theme={{
			token: {
				colorPrimary: "#2d71ae",
				borderRadiusLG: 16
			},
		}}
	>
		{children}
	</ConfigProvider>
);

export { AntdProvider };

