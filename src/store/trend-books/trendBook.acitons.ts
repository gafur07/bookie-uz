import { axiosClassic } from "@/api/axios.interceptors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTrendBooks = createAsyncThunk('latest/add',
    async(_, thunkApi) => {
        try {
            const response = await axiosClassic.get('/most-viewed')
            return response.data.data
        } catch (e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)