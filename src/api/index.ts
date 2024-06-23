import axios from "axios"

export const baseURL = 'https://test.booky.uz/api'
export const clientID = '790566328394-a6j02p3pgp6hcckpe6api7mlammsacn2.apps.googleusercontent.com'

const axiosClassic = axios.create({
    baseURL,
    headers: {
        "Content-Type": "Application/json",
    }
})

axiosClassic.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config
})


export { axiosClassic }