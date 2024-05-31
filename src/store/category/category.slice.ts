import { createSlice } from "@reduxjs/toolkit";
import { ForInitialState } from "./category.interface";
import { getCategory } from "./category.actions";

export const initialState: ForInitialState = {
    loading: false
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getCategory.pending, state => {
                state.loading = true
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.data = action.payload,
                state.loading = false
            })
            .addCase(getCategory.rejected, state => {
                state.loading = false
            })
    }
})

export default categorySlice.reducer