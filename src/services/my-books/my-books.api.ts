import { useQuery } from "@tanstack/react-query"
import { fetchMyBooks } from "./my-books.services"
import { IError } from "../index.interface"
import { message } from "antd"

const useGetMyBooks = () => {
    const query = useQuery({
        queryFn: fetchMyBooks,
        queryKey: ['my-book'],
        onError: (error: IError) => {
            message.error(error.response.data.data.error || error.response.data.data.message)
        } 
    })
    return query
}

export { useGetMyBooks }