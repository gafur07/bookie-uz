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

const UiButtonAction: FC<UiButtonProps & ButtonProps> = (props) => {
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
						colorLinkActive: colorActive ? colorActive : "#2d71ae",
						colorText: color ? color : "#2d71ae",
						defaultColor: color ? color : "#2d71ae",
						defaultBg: background ? background : "#d7e7f8",
						defaultActiveBg: background ? background : "#d7e7f8",
						defaultHoverBg: background ? background : "#d7e7f8",
						defaultBorderColor: borderColor ? borderColor : "#2d71ae",
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

export { UiButtonAction };
