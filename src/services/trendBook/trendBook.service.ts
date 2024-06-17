import { axiosClassic } from "@/api"

const fetchGetTrendingBook = async() => {
    const response = await axiosClassic.get('/most-viewed')
    return response.data.data
}

export { fetchGetTrendingBook }