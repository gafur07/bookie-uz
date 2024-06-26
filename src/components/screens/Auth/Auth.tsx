import { Container } from '@/components/shared';
import { Login as LoginForm } from "./Login/Login"
import { Register as RegisterForm } from "./Register/Register"
import { ForgotPassword as ForgotPasswordForm } from "./ForgotPassword/ForgotPassword"
import { FC, ReactNode } from "react";

interface AuthProps {
	children?: ReactNode
}

const Auth: FC<AuthProps> = ({ children }) => {
	return (
		<section className="min-h-screen py-40 flex justify-center items-center">
			<Container>
				<div className="">
					{children}
				</div>
			</Container>
		</section>
	);
};

export const Register = () => (
	<Auth>
		<RegisterForm />
	</Auth>
);
export const Login = () => (
	<Auth>
		<LoginForm />
	</Auth>
);
export const ForgotPassword = () => (
	<Auth>
		<ForgotPasswordForm />
	</Auth>
);