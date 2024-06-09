import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBookSlug } from "@/services/index.interface";
import { message } from "antd";

interface IInitialState {
  bookBuy: IBookSlug[];
}

const bookBuyFromLocalStorage = localStorage.getItem("buyBook");

const initialState: IInitialState = {
  bookBuy: bookBuyFromLocalStorage ? JSON.parse(bookBuyFromLocalStorage) : [],
};

export const buyBookSlice = createSlice({
  name: "buyBook",
  initialState,
  reducers: {
    addBuyBook: (state, { payload }: PayloadAction<IBookSlug>) => {
      if (
        state.bookBuy.findIndex((item: IBookSlug) => item.id === payload.id) ===
        -1
      ) {
        const updatedBuyBook = [...state.bookBuy, payload];
        localStorage.setItem("buyBook", JSON.stringify(updatedBuyBook));
        return {
          bookBuy: updatedBuyBook,
        };
      }
    },
    clearBuyBook: (state) => {
      state.bookBuy = [];
    },
    removeBuyBook: (state, { payload }: PayloadAction<IBookSlug>) => {
      const updatedBook = state.bookBuy.filter(
        (item) => item.id !== payload.id)
      localStorage.setItem("buyBook", JSON.stringify(updatedBook));
      message.info("Satip aliw qatarinan oshirildi!");
      return {
        bookBuy: updatedBook,
      };
    },
  },
});

export default buyBookSlice.reducer;
export const { addBuyBook, removeBuyBook, clearBuyBook } = buyBookSlice.actions;
