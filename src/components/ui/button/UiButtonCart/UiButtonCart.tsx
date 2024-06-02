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

const UiButtonCart: FC<UiButtonProps & ButtonProps> = (props) => {
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
						colorLink: color ? color : "#ff9e30",
						colorLinkHover: colorHover ? colorHover : "#ff9e30",
						colorLinkActive: colorActive ? colorActive : "#ff9e30",
						colorText: color ? color : "#fff",
						defaultColor: color ? color : "#fff",
						defaultBg: background ? background : "#ff9e30",
						defaultActiveBg: background ? background : "#ff9e30",
						defaultHoverBg: background ? background : "#ff9e30",
						defaultBorderColor: borderColor ? borderColor : "#ff9e30",
						borderRadius: borderRadius ? borderRadius : 6,
						borderRadiusLG: borderRadius ? borderRadius : 16,
						borderRadiusSM: borderRadius ? borderRadius : 4,
						lineWidth: borderWidth ? borderWidth : 1,
						paddingInline: paddingInline ? paddingInline : 14,
						paddingInlineLG: paddingInline ? paddingInline : 14,
						paddingInlineSM: paddingInline ? paddingInline : 7,
						paddingBlock: 5,
						paddingBlockLG: 6,
						paddingBlockSM: 4,
						fontSize: fontSize ? fontSize : 14,
						fontSizeLG: fontSize ? fontSize : 14,
						fontSizeSM: fontSize ? fontSize : 14,
					},
				},
			}}
		>
			<Button {...rest} />
		</ConfigProvider>
	);
};

export { UiButtonCart };
