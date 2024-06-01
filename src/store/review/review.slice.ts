import { createSlice } from "@reduxjs/toolkit"
import { postReview } from "./review.action"
import { IPostReview } from "./review.interface"

const createInitialState: IPostReview = {
    text: '',
    rating: 4,
    slug: '',
}

const initialState = {
    data: createInitialState,
    loading: false
}

export const reviewsSlice = createSlice({
    name: "reviewsSlice",
    initialState,
    reducers: {},
    
    extraReducers: builder => {
        builder
            .addCase(postReview.pending, state => {
                state.loading = true
            })
            .addCase(postReview.fulfilled, (state, { payload }) => {
                state.data.text = payload.text,
                state.data.rating = payload.rating,
                state.data.slug = payload.slug,
                state.loading = false
            })
            .addCase(postReview.rejected, state => {
                state.loading = false
            })
    }
})

export default reviewsSlice.reducer