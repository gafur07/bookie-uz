import { useQuery } from "@tanstack/react-query"
import { axiosGetLatestBook } from "./latest.services"
import { IError } from "../index.interface"
import { message } from "antd"

const useGetLatestBookQuery = () => {
    const query = useQuery({
        queryFn: axiosGetLatestBook,
        queryKey: ['latestBook'],
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

export { useGetLatestBookQuery }