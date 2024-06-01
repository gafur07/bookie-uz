import { createSlice } from "@reduxjs/toolkit"
import { getBookSlug } from "./book.slug.action"
import { IBookSlugState } from "./book.slug.interface"

const initialState: IBookSlugState = {
    bookSlug: {
        title: '',
        description: '',
        price: '',
        author: [],
        categroy: [],
        reviews: []
    },
    loading: false
}

export const bookSlugSlice = createSlice({
    name: "sulg/book",
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getBookSlug.pending, state => {
                state.loading = true
            })
            .addCase(getBookSlug.fulfilled, (state, {payload}) => {
                state.bookSlug.title = payload.title
                state.bookSlug.description = payload.description
                state.bookSlug.price = payload.price
                state.bookSlug.categroy = payload.category
                state.bookSlug.author = payload.author
                state.bookSlug.reviews = payload.reviews
                state.loading = false
            })
            .addCase(getBookSlug.rejected, state => {
                state.loading = false
            })
    }
})


export default bookSlugSlice.reducer