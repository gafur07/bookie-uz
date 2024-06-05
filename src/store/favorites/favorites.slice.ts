import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { IBookSlug } from "@/services/index.interface";

interface IInitialState {
  favorites: IBookSlug[];
}
const favoritesFromToLocalStorage = localStorage.getItem("favorite");

const initialState: IInitialState = {
  favorites: favoritesFromToLocalStorage
    ? JSON.parse(favoritesFromToLocalStorage)
    : [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, { payload }: PayloadAction<IBookSlug>) => {
      if (
        state.favorites.findIndex(
          (item: IBookSlug) => item.id === payload.id
        ) === -1
      ) {
        const updatedFavorites = [...state.favorites, payload];
        localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
        message.success("Saylanganlar qatarina qosildi!");

        return {
          favorites: updatedFavorites,
        };
      }
    },
    removeFavorites: (state, { payload }: PayloadAction<IBookSlug>) => {
      const updatedFavorites = state.favorites.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem("favorite", JSON.stringify(updatedFavorites));
      message.error("Saylanganlar qatarinan oshirildi!");
      return {
        favorites: updatedFavorites,
      };
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorites, removeFavorites } = favoritesSlice.actions;
