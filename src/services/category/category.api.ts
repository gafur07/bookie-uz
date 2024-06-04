import { useQuery } from "@tanstack/react-query"
import { fetchGetCategory } from "./category.services"
import { IError } from "../index.interface"
import { message } from "antd"

const useGetCategory = (name: string) => {
    const query = useQuery({
        queryFn: () => fetchGetCategory(name),
        queryKey: ['category', name],
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

export {
    useGetCategory
}