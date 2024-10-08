import { useQuery } from "@tanstack/react-query";
import { axiosMyBooks } from "./my-books.services";
import { IError } from "../index.interface";
import { message } from "antd";

const useGetMyBooksQuery = (token?: string | null) => {
	const query = useQuery({
		queryFn: axiosMyBooks,
		queryKey: ["my-book"],
		enabled: !!token,
		onError: (error: IError) => {
			message.error(
				error.response.data.message
			);
		},
	});
	return query;
};

export { useGetMyBooksQuery };
