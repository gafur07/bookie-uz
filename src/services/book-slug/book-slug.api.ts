import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";
import { IError } from "@/services/index.interface";
import { axiosGetBookSlug, axiosPostBookReport } from "./book-slug.services";

const useGetBookBySlug = (slug?: string) => {
	const query = useQuery({
		queryFn: () => axiosGetBookSlug(slug),
		queryKey: ["book-slug", slug],
		enabled: !!slug,
		onError: (error: IError) => {
			message.error(
				error.response.data.data.error || error.response.data.data.message
			);
		},
	});
	return query;
};

const usePostReportMutation = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosPostBookReport,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["book-slug"],
			});
			message.success("Pikir bildirildi!");
		},
		onError: (error: IError) => {
			message.error(
				error.response.data.data.error || error.response.data.data.message
			);
		},
	});
	return mutation;
};

export { useGetBookBySlug, usePostReportMutation };
