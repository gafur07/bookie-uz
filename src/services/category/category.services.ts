import { axiosClassic } from "@/api";
import { IBook, IResponseSingleData } from "@/services/index.interface";

const axiosGetCategory = async (name?: string): Promise<IResponseSingleData<IBook>> => {
  const response = await axiosClassic.get(`/category/${name}`);
  return response.data;
};

export { axiosGetCategory };
