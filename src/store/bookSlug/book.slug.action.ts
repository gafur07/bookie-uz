import { axiosClassic } from "@/api/axios.interceptors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostReview } from "./book.slug.interface";
import { message } from "antd";

interface Islug {
    slug: string
}

export const getBookSlug = createAsyncThunk('bookSlug/GetAllBooksBySlug',
    async({ slug }: Islug, {rejectWithValue}) => {
        try {
            const response = await axiosClassic(`/all-books/${slug}`)
            return response.data.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)


export const postReview = createAsyncThunk('reviews/postReview',
    async(data: IPostReview, { rejectWithValue }) => {
        try {
            const response = await axiosClassic.post(`/reviews`, 
            {
                text: data.text,
                slug: data.slug,
                rating: data.rating,
            })
            if(response.status === 200) {
                message.success('Pikir bildirildi')
            }
            return response.data
            
        } catch (e) {
            message.error('Pikir bildirilmedi!')
            return rejectWithValue(e)
        }
    }
)
