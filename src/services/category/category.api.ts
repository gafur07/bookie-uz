import { useQuery } from "@tanstack/react-query"
import { axiosGetCategory } from "./category.services"
import { IError } from "../index.interface"
import { message } from "antd"

const useGetCategoryQuery = (name?: string) => {
    const query = useQuery({
        queryFn: () => axiosGetCategory(name),
        queryKey: ['category', name],
        enabled: !!name,
        onError: (error: IError) => {
            message.error(error.response.data.data.message || error.response.data.data.error)
        }
    })
    return query
}

export {
    useGetCategoryQuery
}