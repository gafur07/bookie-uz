import { axiosClassic } from "@/api";
import { IBook } from "@/services/index.interface";

const axiosGetCategory = async (name?: string): Promise<IBook> => {
  const response = await axiosClassic.get(`/category/${name}`);
  return response.data.data;
};

export { axiosGetCategory };
