import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postPayment } from "./payment.services"
import { message } from "antd"
import { IError } from "../index.interface"

const usePostPaymentMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: postPayment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['payment']
            })
        },
        onError: (error: IError) => {
            message.error(error.response.data.data.error || error.response.data.data.message)
        }
    })
    return mutation
}

export { usePostPaymentMutation }