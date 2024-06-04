import { axiosClassic } from "@/api/axios.interceptors"
import { IBookSlug } from "../index.interface"

export const getSearch = async(search: string): Promise<IBookSlug[]> => {
    const res = await axiosClassic.get(`/all-books?search=${search}`)
    return res.data.data
}
