import { axiosClassic } from "@/api/axios.interceptors"

const fetchGetLatestBook = async() => {
    const response = await axiosClassic.get('/latest-additions')
    return response.data.data
}

export { fetchGetLatestBook }