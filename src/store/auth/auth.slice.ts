import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IToken } from "./auth.interface";
import { authLogin, authRegister, logout } from "./auth.action";
import { IError } from "../index.interface";
import { message } from "antd";

export interface IAuthInitialState {
    token: IToken["token"],
    loading: boolean,
}

export const initialState: IAuthInitialState = {
    token: localStorage.getItem('token') || null,
    loading: false
}


export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            // register
            .addCase(authRegister.pending, state => {
                state.loading = true
            })
            .addCase(authRegister.fulfilled, (state, { payload }: PayloadAction<IToken>) => {
                state.token = payload.token,
                localStorage.setItem('token', `${payload.token}`)
                message.success("Siz dizimnen ottinz!")
                state.loading = false
            })
            .addCase(authRegister.rejected, (state, { payload }) => {
                state.loading = false
                message.error(payload?.response.data.data.message || payload?.response.data.data.error)
            })
            // login
            .addCase(authLogin.pending, state => {
                state.loading = true
            })
            .addCase(authLogin.fulfilled, (state, { payload }: PayloadAction<IToken>) => {
                state.token = payload.token
                message.success("Success!")
                localStorage.setItem('token', `${payload.token}`)
                state.loading = false
            })
            .addCase(authLogin.rejected, (state, { payload }) => {
                state.loading = false
                message.error(payload?.response.data.data.message || payload?.response.data.data.error)
            })

            .addCase(logout.fulfilled, (state) => {
                state.token = null
            })
    }
})

export default AuthSlice.reducer