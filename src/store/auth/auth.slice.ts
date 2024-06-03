import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IToken } from "../../services/auth/auth.interface";

export interface IAuthInitialState {
    token: IToken["token"],
}

export const initialState: IAuthInitialState = {
    token: localStorage.getItem('token') || null,
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signOn: (state, { payload }: PayloadAction<string>) => {
            state.token = payload;
            if (localStorage.getItem("token")) {
                localStorage.removeItem("token");
            }
            localStorage.setItem("token", payload);
        },   
        signIn: (state, { payload }: PayloadAction<string>) => {
            state.token = payload
            if (localStorage.getItem("token")) {
                localStorage.removeItem("token");
            }
            localStorage.setItem("token", payload);
        },
        signOut: (state) => {
            state.token = null,
            localStorage.removeItem("token")
        }   
    },
})

export default AuthSlice.reducer
export const { signIn, signOn, signOut } = AuthSlice.actions;