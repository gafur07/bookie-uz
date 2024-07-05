import { axiosClassic } from "@/api";
import {IAuth, IAuthGoogle, IToken} from "./auth.interface";
import {IResponseSingleData} from "@/services/index.interface";

const fetchRegister = async (form: IAuth): Promise<IToken> => {
	const response = await axiosClassic.post("/register", form);
	return response.data;
};

const fetchLogin = async (form: Omit<IAuth, "name">): Promise<IToken> => {
	const response = await axiosClassic.post("/login", form);
	return response.data;
};

const fetchAuthGoogle = async (form: IAuthGoogle): Promise<IResponseSingleData<IToken>> => {
	const response = await axiosClassic.post("/v2/auth/register/google", form);
	return response.data;
}

const fetchGetMe = async (): Promise<Record<string, unknown>> => {
	const response = await axiosClassic.get("/getme");
	return response.data;
};

export { fetchGetMe, fetchLogin, fetchRegister, fetchAuthGoogle };

