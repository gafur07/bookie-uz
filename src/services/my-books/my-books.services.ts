import { axiosClassic } from "@/api"
import { IBookSlug, IResponseData } from "../index.interface"

const axiosMyBooks = async(): Promise<IResponseData<IBookSlug>> => {
    const response = await axiosClassic.get('/my-books')
    return response.data
}
 
export { axiosMyBooks }