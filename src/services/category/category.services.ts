import { axiosClassic } from "@/api/axios.interceptors"
import { ICategoryBooks } from "./category.interface"

const fetchGetCategory = async (name: ICategoryBooks) => {
    const response = await axiosClassic.get(`/category/${name.name}`)
    return response.data.data
}

export {fetchGetCategory}