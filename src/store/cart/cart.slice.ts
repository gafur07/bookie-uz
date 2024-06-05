import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { IBookSlug } from "@/services/index.interface";

interface IInitialState {
  basket: IBookSlug[];
}

const cartFromLocalStorage = localStorage.getItem("cart");

const initialState: IInitialState = {
  basket: cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [],
};

export const cartSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addCart: (state, { payload }: PayloadAction<IBookSlug>) => {
      if (
        state.basket.findIndex((item: IBookSlug) => item.id === payload.id) ===
        -1
      ) {
        const updatedCart = [...state.basket, payload];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        message.success("Sebetke qosildi!");
        return {
          basket: updatedCart,
        };
      }
    },
    removeCart: (state, { payload }: PayloadAction<IBookSlug>) => {
      const updatedRemove = state.basket.filter(({ id }) => id !== payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedRemove));
      message.info("Sebetten oshirildi!");
      return {
        basket: updatedRemove,
      };
    },
  },
});

export default cartSlice.reducer;
export const { addCart, removeCart } = cartSlice.actions;
