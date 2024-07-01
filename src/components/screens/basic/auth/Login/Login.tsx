import { FC, useEffect } from "react";
import { Form } from "antd";
import { MaskedInput } from "antd-mask-input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UiButton, UiButtonGoogle, UiInputPassword } from "@/components/ui";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { IAuth } from "@/services/index.interface";
import { signIn } from "@/store/index.actions";
import { useLoginMutation } from "@/services";
import { FormProps } from "antd/lib";
import { useGoogleLogin } from "@react-oauth/google";
import { axiosClassic } from "@/api";
import axios from "axios";

const Login: FC = () => {
	const { token } = useAppSelector((store) => store.auth);
	const { data, mutate: login, isSuccess, isLoading } = useLoginMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const auth = useGoogleLogin({
		onSuccess: async () => {
			const res = await axiosClassic.get("/v2/auth/google/redirect");
			console.log(res);
			authCallback(res.data.url);
		},
	});
	const authCallback = (url: string) => {
		axios
			.get(url)
			.then((res) => {
				dispatch(signIn(res.data.token));
				navigate("/", { replace: true });
				console.log(res);
			})
			.finally(() => {
				console.log(url);
			});
	};

	const onFinish: FormProps<IAuth>["onFinish"] = (_values) => {
		login({
			..._values,
			phone: _values.phone.replace(/ /g, "").substring(1),
		});
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(signIn(data.token));
			navigate("/", { replace: true });
		}
	}, [isSuccess, login, data]);

	if (token) return <Navigate to={"/"} replace />;

	return (
		<div className="flex flex-col justify-center items-center gap-[50px]">
			<h2
				className="font-semibold leading-[100%] text-center"
				style={{ fontSize: "calc(22px + 14 * (100vw - 320px) / 1280)" }}
			>
				Kiriw
			</h2>
			<Form
				onFinish={onFinish}
				className="form flex flex-col gap-y-[24px] w-[305px]"
				layout="vertical"
				size="large"
			>
				<Form.Item<IAuth>
					name={"phone"}
					rules={[
						{
							required: true,
							message: "Telefon nomerińzdi kiritiń",
						},
					]}
					initialValue={""}
				>
					<MaskedInput
						className="p-[13px] rounded-[16px] border-[#2d71ae]"
						mask="+{998} 00 000 00 00"
						size="large"
					/>
				</Form.Item>
				<Form.Item
					name={"password"}
					rules={[
						{
							required: true,
							message: "Parolıńızdı kiritiń",
						},
					]}
				>
					<UiInputPassword placeholder="Parolıńız" />
				</Form.Item>
				<div className="flex items-center justify-center gap-[10px] mb-[12px]">
					<span className="cursor-pointer text-[#a1a1a1]">
						Parolińizdi umıttıńız ba?
					</span>
					<Link
						to={"/forgot-password"}
						className="cursor-pointer text-[#2d71ea]"
					>
						Qayta tiklew
					</Link>
				</div>
				<UiButton
					type="primary"
					htmlType="submit"
					className="font-semibold"
					loading={isLoading}
				>
					Kiriw
				</UiButton>
			</Form>
			<UiButtonGoogle onClick={() => auth()}>
				Sign in with Google
			</UiButtonGoogle>
			<Link
				to={"/register"}
				className="font-semibold leading-[130%] text-center text-[#2d71ae] text-md"
			>
				Dizimnen ótiw
			</Link>
		</div>
	);
};

export { Login };
