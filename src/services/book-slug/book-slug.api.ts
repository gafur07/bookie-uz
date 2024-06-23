import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { IError } from "../index.interface"
import { message } from "antd"
import { fetchBookReport, fetchBookSlug } from "./book-slug.services"

const useGetBookBySlug = (slug: string | undefined) => {
    const query = useQuery({
        queryFn: () => fetchBookSlug(slug),
        queryKey: ['book-slug', slug],
        enabled: !!slug,
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
            message.success("Pikir bildirildi!");
        },
        onError: (error: IError) => {
            message.error(error.response.data.data.error || error.response.data.data.message)
        }
    })
    return mutation
}

export { useGetBookBySlug, usePostReportMutation }