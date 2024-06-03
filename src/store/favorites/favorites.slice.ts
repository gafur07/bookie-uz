import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IFavorite, IFavoriteRoot } from "./favorites.interface"
import { message } from "antd"

const initialState = {
    favorites: [],
    loading: false
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorites: (state, {payload}: PayloadAction<IFavoriteRoot>) => {
            if(state.favorites.findIndex((item: IFavorite) => item.id === payload.item.id) === -1) {
                state.favorites = [payload, ...state.favorites]
                message.success("Saylanganlar qatarina qosildi!")
            }
        },
        removeFavorites: (state, {payload}) => {
            state.favorites = state.favorites.filter((item: number) => item !== payload)
            message.error("Saylanganlar qatarinan oshirildi!")
        }
    },
})

export default favoritesSlice.reducer
export const { addFavorites, removeFavorites } = favoritesSlice.actions