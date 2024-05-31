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
            .addCase(addCart.fulfilled, (state, action:any) => {
                if (state.basket.findIndex((item: any) => item?.id === action?.payload?.id) === -1) {
                    state.basket = [action.payload, ...state.basket];
                }
            })
            .addCase(removeCart.fulfilled, (state, action:any) => {
                state.basket = state.basket.filter((item: any)=> item.id !== action.payload);
            })
    }
});

export default cartSlice.reducer;