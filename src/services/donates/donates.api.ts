import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { IError } from "@/services/index.interface";
import { axiosCreateDonates, axiosGetDonates } from "./donates.services";

const useGetDonatesQuery = () => {
	const query = useQuery({
		queryFn: axiosGetDonates,
		queryKey: ["donates"],
		onError: (error: IError) => {
			message.error(
				error.response.data.data.message || error.response.data.data.error
			);
		},
	});
	return query;
};

const useCreateDonatesMutation = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateDonates,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["donates"],
			});
			message.success("Donat qilindi!");
		},
		onError: (error: IError) => {
			message.error(error.response.data.message);
		},
	});
};

export { useGetDonatesQuery, useCreateDonatesMutation };
