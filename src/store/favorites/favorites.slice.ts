import { createSlice } from "@reduxjs/toolkit"
import { getFavorites, removeFavorite } from "./favorites.action"

const initialState = {
    favourites: [],
    loading: false
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getFavorites.fulfilled, (state, action: any) => {
                if (state.favourites.findIndex((item: any) => item.id === action.payload.id ) === -1) {
                    state.favourites = [action.payload, ...state.favourites]
                }
            })

            .addCase(removeFavorite.fulfilled, (state, action: any) => {
                state.favourites = state.favourites.filter((item: any) => item.id !== action.payload.id)
            })
    }
})

export default favoritesSlice.reducer