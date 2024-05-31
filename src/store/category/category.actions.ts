import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategoryBooks } from "./category.interface";
import { axiosClassic } from "@/api/axios.interceptors";

export const getCategory = createAsyncThunk
('get/category', async(data: ICategoryBooks, thunkApi) => {
        try {
            const response = await axiosClassic.get(`/category/${data.name}`)
            return response.data.data
        } catch (e) {
            thunkApi.rejectWithValue(e)
        }
    }
)