import { axiosClassic } from "@/api/axios.interceptors";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface Islug {
    slug: string
}

export const getBookSlug = createAsyncThunk('get/bookSlug',
    async(data: Islug, {rejectWithValue}) => {
        try {
            const response = await axiosClassic(`/all-books/${data.slug}`)
            return response.data.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)