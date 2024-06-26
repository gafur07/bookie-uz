import { axiosClassic } from "@/api";
import { IForgotPassword } from "./password.interface";

const fetchCheckPhone = async (phone: string): Promise<IForgotPassword> => {
	const response = await axiosClassic.post("/check-phone", { phone: phone });
	return response.data;
};

const fetchCheckCode = async (
	data: IForgotPassword
): Promise<IForgotPassword> => {
	const response = await axiosClassic.post("/check-code", data);
	return response.data;
};

const fetchUpdatePassword = async (phone: string): Promise<IForgotPassword> => {
	const response = await axiosClassic.patch("/update-password", {
		phone: phone,
	});
	return response.data;
};

export { fetchCheckCode, fetchCheckPhone, fetchUpdatePassword };
