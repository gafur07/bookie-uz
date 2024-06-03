import { axiosClassic } from "@/api/axios.interceptors"
import { IBookSlug, IPostReview, ISlug } from "./book-slug.interface"

const fetchBookSlug = async(slug: ISlug): Promise<IBookSlug> => {
    const response = await axiosClassic.get(`/all-books/${slug.slug}`)
    return response.data.data
}

const fetchBookReport = async(data: IPostReview) => {
    const response = await axiosClassic.post('/reviews', data)
    return response.data
}

export { fetchBookSlug, fetchBookReport}