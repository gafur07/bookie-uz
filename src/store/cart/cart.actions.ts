import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";

interface ICart {
    item: []
}

interface IRemoveCart {
    id: number
}

// Asynchronous thunk action
export const addCart = createAsyncThunk(
    'cart/addCart',
    async (data: ICart, thunkApi) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            message.success("Sebetke qosildi!")
            return data;
        } catch (err) {
            message.error("Sebetke qosilmadi!")
            return thunkApi.rejectWithValue(err)
        }
    }
);

export const removeCart = createAsyncThunk(
    'cart/removeCart',
    async (id: IRemoveCart, thunApi) => {
        try {
            // Simulate an async operation
            await new Promise(resolve => setTimeout(resolve, 1000));
            return id.id;
        } catch (err) {
            message.error("Sebetten oshirilmedi!")
            return thunApi.rejectWithValue(err);
        }
    }
);
