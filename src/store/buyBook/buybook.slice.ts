import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBookSlug } from "@/services/index.interface";

interface IInitialState {
    bookBuy: IBookSlug[]
}

const initialState:IInitialState = {
    bookBuy: [],
};

export const buyBookSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addBuyBook: (state, {payload}: PayloadAction<IBookSlug>) => {
            if(state.bookBuy.findIndex((item: IBookSlug) => item.id === payload.id) === -1) {
                state.bookBuy.push(payload)
            }
        },
        clearBuyBook: (state) => {
            state.bookBuy = []
        },
        removeBuyBook: (state, {payload}:PayloadAction<number>) => {
            const updatedBook = state.bookBuy = state.bookBuy.filter((item) => item.id !== payload)
            localStorage.setItem('cart', JSON.stringify(updatedBook)
        )
        }
    },
});

export default buyBookSlice.reducer;
export const { addBuyBook, removeBuyBook, clearBuyBook } = buyBookSlice.actions;