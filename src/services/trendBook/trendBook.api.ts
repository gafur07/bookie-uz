import { useQuery } from "@tanstack/react-query"
import { IError } from "../index.interface"
import { message } from "antd"
import { fetchGetTrendingBook } from "./trendBook.service"

const useGetTrendingBook = () => {
    const query = useQuery({
        queryFn: fetchGetTrendingBook,
        queryKey: ['trendingBook'],
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

export { useGetTrendingBook }