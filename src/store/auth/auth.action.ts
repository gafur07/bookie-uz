import { axiosClassic } from "@/api/axios.interceptors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthLogin, IAuthRegister, IToken } from "./auth.interface";
import { IError } from "../index.interface";

export const authRegister = createAsyncThunk<
                IToken, IAuthRegister, {
                    rejectValue: IError
                }
>('auth/register', async(data, {rejectWithValue}) => {
         try {
            const response = await axiosClassic.post("/register", data)
            if (response.status === 200) {
                return response.data
            }
        } catch (e: any) {
            return rejectWithValue(e)
        }
    }
)

export const authLogin = createAsyncThunk<
    IToken, 
    IAuthLogin, 
    {
        rejectValue: IError
    }
>(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosClassic.post("/login", data)
            if (response.status === 200) {
                return response.data
            }
        } catch (e: any) {
            return rejectWithValue(e)
        }
    }
)


export const logout = createAsyncThunk(
    'auth/logout',
    async(_, { rejectWithValue }) => {
        try {
            localStorage.removeItem('token')
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)