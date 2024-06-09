import { useQuery } from "@tanstack/react-query"
import { getSearch } from "./search.services"
import { IError } from "../index.interface"
import { message } from "antd"

const useGetSearch = (value: string) => {
    const query = useQuery({
        queryFn: () => getSearch(value),
        queryKey: ['search', value],
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

export { useGetSearch }