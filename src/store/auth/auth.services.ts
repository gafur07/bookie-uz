import { axiosClassic } from "@/api/axios.interceptors";
import { IAuthLogin, IAuthRegister } from "./auth.interface";

const fetchRegister = async (newUser: IAuthRegister) => {
    const response = await axiosClassic.post('/register', newUser)
    return response.data
}

const fetchLogin = async (newUser: IAuthLogin) => {
    const response = await axiosClassic.post('/login', newUser)
    return response.data
}


export {
    fetchLogin,
    fetchRegister
}