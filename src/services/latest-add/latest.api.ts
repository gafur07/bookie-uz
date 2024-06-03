import { useQuery } from "@tanstack/react-query"
import { fetchGetLatestBook } from "./latest.services"
import { IError } from "../index.interface"
import { message } from "antd"

const useGetLatestBook = () => {
    const query = useQuery({
        queryFn: fetchGetLatestBook,
        queryKey: ['latestBook'],
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

export { useGetLatestBook }