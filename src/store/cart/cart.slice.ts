import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICart, ICartRoot } from "./cart.interface";
import { message } from "antd";

const initialState = {
    basket: [],
};

export const cartSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addCart: (state, {payload}: PayloadAction<ICartRoot>) => {
            if(state.basket.findIndex((item: ICart) => item.id === payload.item.id) === -1) {
                state.basket = [payload, ...state.basket]
                message.success("Sebetke qosildi!")
            }
        },
        removeCart: (state, {payload}) => {
            state.basket = state.basket.filter((item: number) => item !== payload)
        }
    },
});

export default cartSlice.reducer;
export const { addCart, removeCart } = cartSlice.actions;