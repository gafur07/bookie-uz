import { useQuery } from "@tanstack/react-query"
import { message } from "antd"
import { IError } from "@/services/index.interface"
import { axiosGetDonates } from "./donates.services"

const useGetDonatesQuery = () => {
    const query = useQuery({
        queryFn: axiosGetDonates,
        queryKey: ['donates'],
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

export {
    useGetDonatesQuery
}