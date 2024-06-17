import { axiosClassic } from "@/api"
import { IBookSlug } from "../index.interface"

const fetchMyBooks = async(): Promise<IBookSlug[]> => {
    const response = await axiosClassic.get('/my-books')
    return response.data.data
}
 
export { fetchMyBooks }