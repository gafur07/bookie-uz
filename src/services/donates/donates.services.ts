import { axiosClassic } from "@/api/axios.interceptors"
import { IDonate } from "./donates.interface"

const getDonates = async(): Promise<IDonate> => {
    const response = await axiosClassic.get(`/v2/donate`)
    return response.data
}

export { getDonates }