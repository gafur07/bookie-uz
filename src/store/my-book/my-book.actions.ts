import { axiosClassic } from "@/api/axios.interceptors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMyBooks = createAsyncThunk('get/mybook',
    async(_, {rejectWithValue}) => {
        try {
            const response = await axiosClassic.get('/my-books')
            return response.data.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)