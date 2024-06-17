import axios from "axios"

export const baseURL = 'https://test.booky.uz/api'

const axiosClassic = axios.create({
    baseURL,
    headers: {
        "Content-Type": "Application/json"
    }
})

axiosClassic.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config
})

export { axiosClassic }