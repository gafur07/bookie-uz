import { createSlice } from "@reduxjs/toolkit"
import { getTrendBooks } from "./trendBook.acitons"

const initialState = {
    trendBook: [],
    loading: false
}

export const trendBookSlice = createSlice({
    name:"latest",
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
        .addCase(getTrendBooks.pending, state => {
            state.loading = true
        })
        .addCase(getTrendBooks.fulfilled, (state, action) => {
            state.trendBook = action.payload,
            state.loading = false
        })
        .addCase(getTrendBooks.rejected, state => {
            state.loading = false
        })
    }
})


export default trendBookSlice.reducer