import { ComponentPropsWithRef, FC } from "react";

interface ContainerProps extends ComponentPropsWithRef<"div"> {

}

const Container: FC<ContainerProps> = (props) => {
	const { className, ...rest  } = props
	return (
		<div className={`max-w-[1350px] px-5 mx-auto ${className || ""}`} {...rest}  />
	);
};

export { Container };
