import { message } from "antd"
import { IError } from "../index.interface"
import { getDonates } from "./donates.services"
import { useQuery } from "@tanstack/react-query"

const useGetDonates = () => {
    const query = useQuery({
        queryFn: () => getDonates(),
        queryKey: ['donates'],
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

export {
    useGetDonates
}