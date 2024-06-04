import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { IBookSlug } from "@/services/index.interface";

interface IInitialState {
    basket: IBookSlug[]
}

const basketFromToLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
const initialState:IInitialState = {
    basket: basketFromToLocalStorage || [],
};

export const cartSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addCart: (state, {payload}: PayloadAction<IBookSlug>) => {
            if(state.basket.findIndex((item: IBookSlug) => item.id === payload.id) === -1) {
                state.basket.push(payload)
                localStorage.setItem('cart', JSON.stringify([payload, ...state.basket]))
                message.success("Sebetke qosildi!")
            }
        },
        removeCart: (state, {payload}:PayloadAction<number>) => {
            const updatedRemove = state.basket.filter(({id}) => id !== payload)
            localStorage.setItem('cart', JSON.stringify(updatedRemove))
            message.info("Sebetten oshirildi!")
        }
    },
});

export default cartSlice.reducer;
export const { addCart, removeCart } = cartSlice.actions;