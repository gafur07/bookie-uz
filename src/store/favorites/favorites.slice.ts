import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { message } from "antd"
import { IBookSlug } from "@/services/index.interface"

interface IInitialState {
    favorites: IBookSlug[]
}
const  favoritesFromToLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
const initialState:IInitialState = {
    favorites: favoritesFromToLocalStorage || [],
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorites: (state, {payload}: PayloadAction<IBookSlug>) => {
            if(state.favorites.findIndex((item: IBookSlug) => item.id === payload.id) === -1) {
                state.favorites.push(payload)
                localStorage.setItem('cart', JSON.stringify([payload, ...state.favorites]))
                message.success("Saylanganlar qatarina qosildi!")
            }
        },
        removeFavorites: (state, {payload}: PayloadAction<number>) => {
            const updatedFavorites = state.favorites.filter((item) => item.id !== payload)
            localStorage.setItem('cart', JSON.stringify(updatedFavorites))
            message.error("Saylanganlar qatarinan oshirildi!")
        }
    },
})

export default favoritesSlice.reducer
export const { addFavorites, removeFavorites } = favoritesSlice.actions