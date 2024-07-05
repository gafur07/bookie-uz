import { axiosClassic } from "@/api";
import { IDonateChange, IDonateData, IDonatePayment } from "./donates.interface";
import { IResponseData, IResponseSingleData } from "@/services/index.interface";

const axiosGetDonates = async (): Promise<IResponseData<IDonateData>> => {
	const response = await axiosClassic.get(`/v2/donate`);
	return response.data;
};

const axiosCreateDonates = async (form: IDonateChange): Promise<IResponseSingleData<IDonatePayment>> => {
	const response = await axiosClassic.post(`/user/donate/paying`, form);
	return response.data;
}

export { axiosGetDonates, axiosCreateDonates };
