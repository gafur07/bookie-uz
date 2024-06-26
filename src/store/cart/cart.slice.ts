import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { IBookSlug } from "@/services/index.interface";

interface IInitialState {
  basket: IBookSlug[];
}

const initialState: IInitialState = {
  basket: [],
};

export const cartSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addCart: (state, { payload }: PayloadAction<IBookSlug>) => {
      if (!state.basket.find((item) => item.id === payload.id)) {
        state.basket.push(payload)
        message.success("Sebetke qosildi!");
      }
    },
    removeCart: (state, { payload }: PayloadAction<IBookSlug>) => {
      state.basket = state.basket.filter(({ id }) => id !== payload.id);
      message.info("Sebetten oshirildi!");
    },
  },
});

export default cartSlice.reducer;
export const { addCart, removeCart } = cartSlice.actions;
