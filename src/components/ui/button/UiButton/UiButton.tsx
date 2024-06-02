import { Button, ButtonProps, ConfigProvider } from "antd";
import { FC } from "react";

interface UiButtonProps {
	color?: string;
	colorHover?: string;
	colorActive?: string;
	fontSize?: number;
	background?: string;
	borderColor?: string;
	borderRadius?: number;
	borderWidth?: number;
	paddingInline?: number;
	borderColorHover?: string;
}

const UiButton: FC<UiButtonProps & ButtonProps> = (props) => {
	const {
		color,
		colorHover,
		colorActive,
		fontSize,
		background,
		borderColor,
		borderRadius,
		borderWidth,
		paddingInline,
		...rest
	} = props;

	return (
		<ConfigProvider
			theme={{
				components: {
					Button: {
						colorLink: color ? color : "#1677ff",
						colorLinkHover: colorHover ? colorHover : "#69b1ff",
						colorLinkActive: colorActive ? colorActive : "#0958d9",
						colorText: color ? color : "rgba(0, 0, 0, 0.88)",
						defaultColor: color ? color : "rgba(0, 0, 0, 0.88)",
						defaultBg: background ? background : "#ffffff",
						defaultActiveBg: background ? background : "#ffffff",
						defaultHoverBg: background ? background : "#ffffff",
						defaultBorderColor: borderColor ? borderColor : "#d9d9d9",
						borderRadius: borderRadius ? borderRadius : 6,
						borderRadiusLG: borderRadius ? borderRadius : 16,
						borderRadiusSM: borderRadius ? borderRadius : 4,
						lineWidth: borderWidth ? borderWidth : 1,
						paddingInline: paddingInline ? paddingInline : 15,
						paddingInlineLG: paddingInline ? paddingInline : 15,
						paddingInlineSM: paddingInline ? paddingInline : 7,
						paddingBlock: 0,
						paddingBlockLG: 0,
						paddingBlockSM: 0,
						fontSize: fontSize ? fontSize : 14,
						fontSizeLG: fontSize ? fontSize : 16,
						fontSizeSM: fontSize ? fontSize : 14,
					},
				},
			}}
		>
			<Button {...rest} />
		</ConfigProvider>
	);
};

export { UiButton };
