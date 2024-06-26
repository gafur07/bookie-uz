import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthInitialState {
	token: string | null;
}

export const initialState: IAuthInitialState = {
	token: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signOn: (state, { payload }: PayloadAction<string>) => {
			state.token = payload;
		},
		signIn: (state, { payload }: PayloadAction<string>) => {
			state.token = payload;
		},
		signOut: (state) => {
			state.token = null;
		},
	},
});

export default authSlice.reducer;
export const { signIn, signOn, signOut } = authSlice.actions;
