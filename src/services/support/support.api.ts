import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchPostSupport } from "./support.services"
import { message } from "antd"
import { IError } from "../index.interface"

const usePostSupportMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchPostSupport,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['support']
            })
            message.success('Pikir bildirildi!')
        },
        onError: (error: IError) => {
            message.error(error.response.data.data.error || error.response.data.data.message)
        }
    })
    return mutation
}

export { usePostSupportMutation }