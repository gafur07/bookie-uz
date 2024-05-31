import { createSlice } from "@reduxjs/toolkit"
import { getLatestAdd } from "./latest.action"

const initialState = {
    latest: [],
    loading: false
}

export const latestSlice = createSlice({
    name:"latest",
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
        .addCase(getLatestAdd.pending, state => {
            state.loading = true
        })
        .addCase(getLatestAdd.fulfilled, (state, action) => {
            state.latest = action.payload,
            state.loading = false
        })
        .addCase(getLatestAdd.rejected, state => {
            state.loading = false
        })
    }
})


export default latestSlice.reducer