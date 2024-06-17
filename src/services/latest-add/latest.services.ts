import { axiosClassic } from "@/api"
import { IBookSlug } from "../index.interface"

const fetchGetLatestBook = async():Promise<IBookSlug[]> => {
    const response = await axiosClassic.get('/latest-additions')
    return response.data.data
}

export { fetchGetLatestBook }