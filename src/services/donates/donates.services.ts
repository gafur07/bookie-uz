import { axiosClassic } from "@/api";
import { IDonateData } from "./donates.interface";
import { IResponseData } from "@/services/index.interface";

const axiosGetDonates = async (): Promise<IResponseData<IDonateData>> => {
	const response = await axiosClassic.get(`/v2/donate`);
	return response.data;
};

export { axiosGetDonates };
