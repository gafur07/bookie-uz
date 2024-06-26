import { useQuery } from "@tanstack/react-query";
import { axiosGetSearch } from "./search.services";
import { IError } from "../index.interface";
import { message } from "antd";

const useGetSearchQuery = (value: string) => {
	const query = useQuery({
		queryFn: () => axiosGetSearch(value),
		queryKey: ["search", value],
		onError: (error: IError) => {
			message.error(error.message);
		},
	});
	return query;
};

export { useGetSearchQuery };
