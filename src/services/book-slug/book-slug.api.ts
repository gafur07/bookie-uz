import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { IError } from "../index.interface"
import { message } from "antd"
import { fetchBookReport, fetchBookSlug } from "./book-slug.services"
import { ISlug } from "./book-slug.interface"

const useGetBookBySlug = (params: ISlug) => {
    const query = useQuery({
        queryFn: () => fetchBookSlug(params),
        queryKey: ['book-slug', params],
        onError: (error: IError) => {
            message.error(error.response.data.data.error || error.response.data.data.message)
        }
    })
    return query
}

const usePostReportMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchBookReport,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['book-slug'],
            })
        },
        onError: (error: IError) => {
            message.error(error.response.data.data.error || error.response.data.data.message)
        }
    })
    return mutation
}

export { useGetBookBySlug, usePostReportMutation }