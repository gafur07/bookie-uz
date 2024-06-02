import { createSlice } from "@reduxjs/toolkit";
import { addCart, removeCart } from "./cart.actions";


const initialState = {
    basket: [],
};

export const cartSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCart.fulfilled, (state, {payload}) => {
                if (state.basket.findIndex((i: any) => i?.id === payload?.item.id) === -1) {
                    state.basket = [payload, ...state.basket];
                }
            })
            .addCase(removeCart.fulfilled, (state, {payload}) => {
                state.basket = state.basket.filter((item: any)=> item?.id !== payload);
            })
    }
});

export default cartSlice.reducer;