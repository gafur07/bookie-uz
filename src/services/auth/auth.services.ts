import { axiosClassic } from "@/api";
import { IAuthLogin, IAuthRegister } from "./auth.interface";

const fetchRegister = async (newUser: IAuthRegister): Promise<{token: string}> => {
    const response = await axiosClassic.post('/register', newUser)
    return response.data
}

const fetchLogin = async (newUser: IAuthLogin): Promise<{token: string}> => {
    const response = await axiosClassic.post('/login', newUser)
    return response.data
}

const fetchGetMe = async (): Promise<string> => {
    const response = await axiosClassic.get('/getme')
    return response.data.data.role
}


export {
    fetchLogin,
    fetchRegister,
    fetchGetMe
}