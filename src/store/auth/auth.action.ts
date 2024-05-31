import { IAuthLogin, IAuthRegister } from "@/services/AuthServices/auth.interface";
import { authService } from "@/services/AuthServices/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";

export const authRegister = createAsyncThunk<
                IAuthLogin,
                IAuthRegister 
>('auth/register', async(data, thunApi) => {
         try {
            const response = await authService.register(data)
            data.callback(response)
            message.success("Siz dizimnen ottinz!")
            return response.data.data
            
        } catch (e) {
            data.errorCallback()
            return thunApi.rejectWithValue(e)
        }
    }
)

export const authLogin = createAsyncThunk<IAuthRegister, IAuthLogin>(
    'auth/login',
    async (data, thunkApi) => {
        try {
            const response = await authService.login(data)
            data.callback(response)
            return response.data.data
        } catch (e) {
            data.errorCallback()
            thunkApi.rejectWithValue(e)
        }
    }
)


export const logout = createAsyncThunk(
    'auth/logout',
    async(_, thunkApi) => {
        try {
            localStorage.removeItem('token')
        } catch (e) {
            thunkApi.rejectWithValue(e)
        }
    }
)