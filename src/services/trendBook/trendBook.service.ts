import { axiosClassic } from "@/api"

const axiosGetTrendingBook = async() => {
    const response = await axiosClassic.get('/most-viewed')
    return response.data.data
}

export { axiosGetTrendingBook }