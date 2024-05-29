import { createSlice } from "@reduxjs/toolkit";
import { IAuthInitialState } from "./auth.interface";
import { authLogin, authRegister, logout } from "./auth.action";

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
            .addCase(authRegister.fulfilled, (state, action) => {
                state.data = action.payload,
                state.loading = false
            })
            .addCase(authRegister.rejected, state => {
                state.loading = false
            })
            // login
            .addCase(authLogin.pending, state => {
                state.loading = true
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.data = action.payload,
                state.loading = false,
                window.location.reload()
            })
            .addCase(authLogin.rejected, state => {
                state.loading = false
            })

            .addCase(logout.fulfilled, (state) => {
                state.data = {},
                state.token = null
            })
    }
})

export default AuthSlice.reducer