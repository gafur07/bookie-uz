import { axiosClassic } from "@/api/axios.interceptors";
import { IAuthRegister } from "./auth.interface";

export const authService = {
    async register(data: IAuthRegister) {
        return await axiosClassic.post("/register", data)
    },
    async login(data: any) {
        const response = await axiosClassic.post('/login', data)
        return response
    }
}