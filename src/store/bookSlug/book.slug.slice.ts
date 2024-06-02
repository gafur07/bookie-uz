import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getBookSlug } from "./book.slug.action";
import {
  IAudio,
  IAuthor,
  IBookSlug,
  ICategory,
  IGenre,
  INarrator,
  IReviews,
  Image,
} from "./book.slug.interface";

interface IBookSlugState {
  bookSlug: IBookSlug | null;
  category: ICategory[];
  author: IAuthor[];
  reviews: IReviews[];
  narrator: INarrator[],
  genre: IGenre[],
  audios: IAudio[]
  image: Image[];
  loading: boolean;
}

const initialState: IBookSlugState = {
  bookSlug: null,
  category: [],
  author: [],
  narrator: [],
  reviews: [],
  image: [],
  genre: [],
  audios: [],
  loading: false,
};

export const bookSlugSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getBookSlug.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getBookSlug.fulfilled,
        (state, { payload }: PayloadAction<IBookSlug>) => {
          state.bookSlug = payload;
          state.category = payload.category;
          state.author = payload.author;
          state.reviews = payload.reviews;
          state.audios = payload.audios;
          state.genre = payload.genre;
          state.narrator = payload.narrator;
          state.image = payload.image;
          state.loading = false;
        }
      )
      .addCase(getBookSlug.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export default bookSlugSlice.reducer;
