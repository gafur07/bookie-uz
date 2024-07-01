import { useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { axiosGetCategories, axiosGetCategory } from "./category.services";
import { IError } from "@/services/index.interface";

const useGetCategoriesQuery = () =>
	useQuery({
		queryFn: axiosGetCategories,
		queryKey: ["categories"],
		onError: (error: IError) => {
			message.error(error.response.data.message);
		},
	});

const useGetCategoryQuery = (name?: string) => {
	const query = useQuery({
		queryFn: () => axiosGetCategory(name),
		queryKey: ["category", name],
		enabled: !!name,
		onError: (error: IError) => {
			message.error(error.response.data.message);
		},
	});
	return query;
};

export { useGetCategoriesQuery, useGetCategoryQuery };
