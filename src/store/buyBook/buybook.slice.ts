import { message } from "antd";
import { IBookSlug } from "@/services/index.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
	bookBuy: IBookSlug[];
}

const initialState: IInitialState = {
	bookBuy: [],
};

export const buyBookSlice = createSlice({
	name: "buyBook",
	initialState,
	reducers: {
		addBuyBook: (state, { payload }: PayloadAction<IBookSlug>) => {
			if (!state.bookBuy.find((item) => item.id === payload.id)) {
				state.bookBuy.push(payload);
			}
		},
		clearBuyBook: (state) => {
			state.bookBuy = [];
		},
		removeBuyBook: (state, { payload }: PayloadAction<IBookSlug>) => {
			state.bookBuy = state.bookBuy.filter((item) => item.id !== payload.id);
			message.info("Satip aliw qatarinan oshirildi!");
		},
	},
});

export default buyBookSlice.reducer;
export const { addBuyBook, removeBuyBook, clearBuyBook } = buyBookSlice.actions;
