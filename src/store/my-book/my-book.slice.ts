import { createSlice } from "@reduxjs/toolkit"
import { getMyBooks } from "./my-book.actions"

const initialState = {
    mybooks: [],
    loading: false
}

export const myBookSlice = createSlice({
    name: "mybook",
    initialState,
    reducers: {},

    extraReducers: buidler => {
        buidler
            .addCase(getMyBooks.pending, state => {
                state.loading = false
            })
            .addCase(getMyBooks.fulfilled, (state, action) => {
                state.mybooks = action.payload,
                state.loading = false
            })
            .addCase(getMyBooks.rejected, state => {
                state.loading = false
            })
    }
})

export default myBookSlice.reducer