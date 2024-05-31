import { createAsyncThunk } from "@reduxjs/toolkit";

interface IFavorite {
    item: any
}

interface IFavoriteRemove {
    id: number
}

export const getFavorites = createAsyncThunk("favorites",
    async(data: IFavorite, {rejectWithValue}) => {
        try {
            await new Promise(res =>  setTimeout(res, 1000))
            return data.item
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const removeFavorite = createAsyncThunk('favorite/remove',
    async(id: IFavoriteRemove, {rejectWithValue}) => {
        try {
            return id.id
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)
