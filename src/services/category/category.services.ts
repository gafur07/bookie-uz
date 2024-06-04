import { axiosClassic } from "@/api/axios.interceptors"
import { IBook } from "../index.interface"

const fetchGetCategory = async (name: string): Promise<IBook> => {
    const response = await axiosClassic.get(`/category/${name}`)
    return response.data.data
}

export {fetchGetCategory}