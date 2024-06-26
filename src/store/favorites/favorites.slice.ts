import { message } from "antd";
import { IBookSlug } from "@/services/index.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  favorites: IBookSlug[];
}
const initialState: IInitialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, { payload }: PayloadAction<IBookSlug>) => {
      if (!state.favorites.find((item: IBookSlug) => item.id === payload.id)) {
        state.favorites.push(payload);
        message.success("Saylanganlar qatarina qosildi!");
      }
    },
    removeFavorites: (state, { payload }: PayloadAction<IBookSlug>) => {
      state.favorites = state.favorites.filter((item) => item.id !== payload.id);
      message.error("Saylanganlar qatarinan oshirildi!");
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorites, removeFavorites } = favoritesSlice.actions;
