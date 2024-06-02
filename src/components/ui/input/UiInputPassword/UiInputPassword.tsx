import { FC } from "react";
import { ConfigProvider, Input, InputProps } from "antd";

const UiInput: FC<InputProps> = (props) => {
	const { type } = props;
	return (
		<ConfigProvider
			theme={{
				components: {
					Input: {
						colorBorder: "#2d71ae",
                        borderRadius: 8,
                        borderRadiusSM: 12,
                        borderRadiusLG: 16,
                        paddingInline: 15,
						paddingInlineLG: 13,
						paddingInlineSM: 7,
                        paddingBlock: 4,
                        paddingBlockLG: 13,
                        fontSize: 10,
                        fontSizeLG: 14
					},
				},
			}}
		>
				<Input.Password {...props} />
		</ConfigProvider>
	);
};

export { UiInput };
