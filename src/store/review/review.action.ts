import { $axios } from "@/api/axios.interceptors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostReview } from "./review.interface";

export const postReview = createAsyncThunk('postReview',
    async(data: IPostReview, { rejectWithValue }) => {
        try {
            const response = await $axios.post(`/reviews/${data.slug}`, 
            {
                slug: data.slug,
                text: data.text, 
                rating:data.rating 
            })
            return response.data.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)