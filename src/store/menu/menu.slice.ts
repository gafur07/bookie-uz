import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
	open: boolean;
}

const initialState: IInitialState = {
	open: false
}

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		toggleOpen: (state) => {
			state.open = !state.open 
		}
	}
})

export default menuSlice.reducer;
export const { toggleOpen } = menuSlice.actions;