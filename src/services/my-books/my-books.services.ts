import { axiosClassic } from "@/api/axios.interceptors"

const fetchMyBooks = async() => {
    const response = await axiosClassic.get('/my-books')
    return response.data.data
}
 
export { fetchMyBooks }