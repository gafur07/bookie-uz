import { axiosClassic } from "@/api"
import { IBookSlug, IPostReview } from "./book-slug.interface"

const fetchBookSlug = async(slug: string | undefined): Promise<IBookSlug> => {
    const response = await axiosClassic.get(`/all-books/${slug}`)
    return response.data.data
}

const fetchBookReport = async(form: IPostReview): Promise<void> => {
    const response = await axiosClassic.post('/reviews', form)
    return response.data
}

export { fetchBookSlug, fetchBookReport}