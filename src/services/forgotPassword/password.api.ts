import { useMutation, useQueryClient } from "@tanstack/react-query"
import { message } from "antd"
import { IError } from "@/services/index.interface"
import { fetchCheckCode, fetchCheckPhone, fetchUpdatePassword } from "./password.services"

const useCheckPhoneMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchCheckPhone,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['check-phone']
            })
            message.success('Kod jiberildi')
        },
        onError: (error: IError) => {
            if(error.response.status == 422) {
                message.error('Bul nomer dizimnen otpegen!')
            }
        }
    })
    return mutation
}

const useCheckCodeMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchCheckCode,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['check-phone']
            })
        },
        onError: (error: IError) => {
            if(error.response.status === 500) {
                message.error('Kod qate!')
            }
        }
    })
    return mutation
}

const useUpdatePasswordMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: fetchUpdatePassword,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['check-phone']
            })
            message.success('Parol ozgertildi')
        }
    })
    return mutation
}

export { useCheckCodeMutation, useCheckPhoneMutation, useUpdatePasswordMutation }