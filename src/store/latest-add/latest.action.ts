import { axiosClassic } from "@/api/axios.interceptors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLatestAdd = createAsyncThunk('latest/add',
    async(_, thunkApi) => {
        try {
            const response = await axiosClassic.get('/latest-additions')
            return response.data.data
        } catch (e) {
            return thunkApi.rejectWithValue(e)
        }
    }
)