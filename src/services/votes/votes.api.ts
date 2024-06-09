import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchDeleteVotes, fetchGetVotes, fetchPostVotes } from "./votes.services"
import { message } from "antd"
import { IError } from "../index.interface"

const useGetVotes = (slug: string | undefined) => {
    const query = useQuery({
        queryFn: () => fetchGetVotes(slug),
        queryKey: ['votes', slug],
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

const usePostVotes = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchPostVotes,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['votes']
            })
            message.success('Dawis berildi!')
        },
        onError: (error: IError) => {
            message.error(error.response.data.data.error || error.response.data.data.message)
        }
    })
    return mutation
}

const useRemoveVotes = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchDeleteVotes,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['votes']
            })
            message.info('Dawis oshirildi!')
        },
        onError: (error: IError) => {
            message.error(error.response.data.data.error || error.response.data.data.message)
        }
    })
    return mutation
}

export { useGetVotes, usePostVotes, useRemoveVotes }