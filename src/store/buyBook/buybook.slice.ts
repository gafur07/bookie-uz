import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBookSlug } from "@/services/index.interface";

interface IInitialState {
  bookBuy: IBookSlug[];
}

const bookBuyFromLocalStorage = localStorage.getItem("buyBook");

const initialState: IInitialState = {
  bookBuy: bookBuyFromLocalStorage ? JSON.parse(bookBuyFromLocalStorage) : [],
};

export const buyBookSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBuyBook: (state, { payload }: PayloadAction<IBookSlug>) => {
      if (
        state.bookBuy.findIndex((item: IBookSlug) => item.id === payload.id) ===
        -1
      ) {
        const updatedBuyBook = [...state.bookBuy, payload];
        localStorage.setItem("bookBuy", JSON.stringify(updatedBuyBook));
        return {
          bookBuy: updatedBuyBook,
        };
      }
    },
    clearBuyBook: (state) => {
      state.bookBuy = [];
    },
    removeBuyBook: (state, { payload }: PayloadAction<number>) => {
      const updatedBook = (state.bookBuy = state.bookBuy.filter(
        (item) => item.id !== payload
      ));
      localStorage.setItem("cart", JSON.stringify(updatedBook));
      return {
        bookBuy: updatedBook,
      };
    },
  },
});

export default buyBookSlice.reducer;
export const { addBuyBook, removeBuyBook, clearBuyBook } = buyBookSlice.actions;
