import { axiosClassic } from "@/api"
import { IBookSlug, IPostReview } from "./book-slug.interface"
import { IResponseData } from "../index.interface"

const axiosGetAllBooks = async(): Promise<IResponseData<IBookSlug>> => {
    const response = await axiosClassic.get(`/all-books`)
    return response.data
}

const axiosGetBookSlug = async(slug?: string): Promise<IBookSlug> => {
    const response = await axiosClassic.get(`/all-books/${slug}`)
    return response.data.data
}

const axiosPostBookReport = async(form: IPostReview): Promise<void> => {
    const response = await axiosClassic.post('/reviews', form)
    return response.data
}

export { axiosGetAllBooks , axiosGetBookSlug, axiosPostBookReport }