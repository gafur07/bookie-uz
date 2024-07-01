import { axiosClassic } from "@/api";
import { IBook, IResponseData, IResponseSingleData } from "@/services/index.interface";
import { ICategories } from "./category.interface";

 const axiosGetCategories = async (): Promise<IResponseData<ICategories>> => {
	const response = await axiosClassic.get("/category");
	return response.data;
}

const axiosGetCategory = async (name?: string): Promise<IResponseSingleData<IBook>> => {
  const response = await axiosClassic.get(`/category/${name}`);
  return response.data;
};

export { 
	axiosGetCategories,
	axiosGetCategory

};
