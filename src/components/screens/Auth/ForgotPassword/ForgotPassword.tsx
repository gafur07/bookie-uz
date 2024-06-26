import { BkGoogleLogo } from "@/assets/images";
import { UiButton, UiButtonGoogle, UiInput, UiInputPassword } from "@/components/ui";
import {
	useCheckCodeMutation,
	useCheckPhoneMutation,
	useUpdatePasswordMutation,
} from "@/services/forgotPassword/password.api";
import { IForgotPassword } from "@/services/forgotPassword/password.interface";
import { Form } from "antd";
import { MaskedInput } from "antd-mask-input";
import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword: FC = () => {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const [phoneNumber, setPhoneNumber] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
	const { mutate: checkPhone } = useCheckPhoneMutation();
	const { mutate: checkCode } = useCheckCodeMutation();
	const {
		data,
		mutate: changePassword,
		isSuccess,
	} = useUpdatePasswordMutation();

	const onFinish = (_values: IForgotPassword) => {
		checkCode({
			code: _values.code,
			phone: _values.phone.replace(/ /g, "").substring(1),
		});
		setIsUpdatingPassword(true);
	};

	const getSms = () => {
		checkPhone(phoneNumber);
	};
	const updatePassword = () => {
		changePassword(passwordValue);
	};
	useEffect(() => {
		if (isSuccess) {
			navigate("/login", { replace: true });
		}
	}, [data, changePassword, isSuccess]);

	return (
		<div className="flex flex-col justify-center items-center gap-[50px]">
			<h2
				className="font-semibold leading-[100%] text-center"
				style={{ fontSize: "calc(22px + 14 * (100vw - 320px) / 1280)" }}
			>
				Paroldi qayta tiklew
			</h2>
			{!isUpdatingPassword ? (
				<Form
					form={form}
					onFinish={onFinish}
					className="form flex flex-col w-[305px]"
					layout="vertical"
					size="large"
				>
					<Form.Item
						name={"phone"}
						required={true}
						rules={[
							{
								required: true,
								message: "Telefon nomerińzdi kiritiń",
							},
						]}
						initialValue={""}
					>
						<MaskedInput
							onChange={(e) => setPhoneNumber(e.unmaskedValue)}
							className="p-[13px] rounded-[16px] border-[#2d71ae]"
							mask="+{998} 00 000 00 00"
							size="large"
						/>
					</Form.Item>
					<Form.Item
						name={"code"}
						required={true}
						rules={[
							{
								required: true,
								message: "SMS Kodti kiritin",
							},
							{
								max: 4,
								message: "Kod qate",
							},
						]}
					>
						<UiInput placeholder="SMS Kod" />
					</Form.Item>
					<p
						onClick={getSms}
						className="cursor-pointer text-primary transform translate-x-[230px] translate-y-[-60px] hover:underline"
					>
						Kodti aliw
					</p>
					<UiButton
						type="primary"
						className="font-semibold"
						onClick={() => form.submit()}
					>
						Qayta tikelew
					</UiButton>
				</Form>
			) : (
				<Form
					onFinish={updatePassword}
					className="form flex flex-col w-[305px]"
					layout="vertical"
					size="large"
				>
					<Form.Item
						name={"password"}
						required={true}
						rules={[
							{
								required: true,
								message: "Parolıńızdı kiritiń",
							},
							{
								min: 8,
								message: "Parol keminde 8 belginen ibarat bolıwı kerek",
							},
						]}
					>
						<UiInputPassword
							value={passwordValue}
							onChange={(e) => setPasswordValue(e.target.value)}
							placeholder="Parolıńız"
						/>
					</Form.Item>

					<UiButton
						type="primary"
						className="font-semibold"
						onClick={updatePassword}
					>
						Paroldi ozgertiw
					</UiButton>
				</Form>
			)}
			<UiButtonGoogle>
				Sign in with Google
			</UiButtonGoogle>
			<Link
				to={"/register"}
				className="font-semibold leading-[130%] text-center text-primary text-md"
			>
				Dizimnen ótiw
			</Link>
		</div>
	);
};

export { ForgotPassword };
