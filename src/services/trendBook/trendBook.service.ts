import { axiosClassic } from "@/api"
import { IBookSlug, IResponseData } from "../index.interface"

const axiosGetTrendingBook = async():Promise<IResponseData<IBookSlug>> => {
    const response = await axiosClassic.get('/most-viewed')
    return response.data
}

export { axiosGetTrendingBook }