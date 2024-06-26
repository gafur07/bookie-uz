import { axiosClassic } from "@/api"
import { IBookSlug } from "../index.interface"

export const axiosGetSearch = async(search: string): Promise<IBookSlug[]> => {
    const res = await axiosClassic.get(`/all-books`, { params: { search } })
    return res.data.data
}
