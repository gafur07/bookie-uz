import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchLogin, fetchRegister } from "./auth.services"
import { message } from "antd"
import { IError } from "../index.interface"

const useRegisterMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchRegister,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['login']
            });
            queryClient.invalidateQueries({
                queryKey: ['orders']
            })
            message.success('Siz dizimnen ottiniz!')
        },
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return mutation
}


const useLoginMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchLogin,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:['login']
            })
            queryClient.invalidateQueries({
                queryKey: ['orders']
            })
            message.success("Success!")
        },
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return mutation
}


export {
    useLoginMutation,
    useRegisterMutation
}