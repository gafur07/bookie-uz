import { useQuery } from "@tanstack/react-query"
import { fetchGetGoogleCallback, fetchGetGoogleDirect } from "./google.services"


export const useGoogleRedirectQuery = () => {
    const query = useQuery({
        queryFn: fetchGetGoogleDirect,
        queryKey: ['google'],
        // onError: (error: IError) => {
        //     message.error(error.response.data.data.error || error.response.data.data.message)
        // }
    })
    return query
}

export const useGoogleCallbackQuery = () => {
    const query = useQuery({
        queryFn: fetchGetGoogleCallback,
        queryKey: ['google'],
        // onError: (error: IError) => {
        //     message.error(error.response.data.data.error || error.response.data.data.message)
        // }
    })
    return query
}
