import { axiosClassic } from "@/api";
import { IAuth, IToken } from "./auth.interface";

const fetchRegister = async (form: IAuth): Promise<IToken> => {
	const response = await axiosClassic.post("/register", form);
	return response.data;
};

const fetchLogin = async (form: Omit<IAuth, "name">): Promise<IToken> => {
	const response = await axiosClassic.post("/login", form);
	return response.data;
};

const fetchGetMe = async (): Promise<Record<string, unknown>> => {
	const response = await axiosClassic.get("/getme");
	return response.data;
};

export { fetchGetMe, fetchLogin, fetchRegister };

