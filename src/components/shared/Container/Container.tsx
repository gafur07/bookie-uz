import { ComponentPropsWithRef, FC } from "react";

interface ContainerProps extends ComponentPropsWithRef<"div"> {

}

const Container: FC<ContainerProps> = (props) => {
	const { className, ...rest  } = props
	return (
		<div className={`max-w-[1280px] mx-auto max-[1280px]:px-[20px] ${className || ""}`} {...rest}  />
	);
};

export { Container };
