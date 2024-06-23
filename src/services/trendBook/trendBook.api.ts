import { useQuery } from "@tanstack/react-query"
import { IError } from "../index.interface"
import { message } from "antd"
import { axiosGetTrendingBook } from "./trendBook.service"

const useGetTrendingBookQuery = () => {
    const query = useQuery({
        queryFn: axiosGetTrendingBook,
        queryKey: ['trendingBook'],
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

export { useGetTrendingBookQuery }