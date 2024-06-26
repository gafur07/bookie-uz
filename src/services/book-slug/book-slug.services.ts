import { axiosClassic } from "@/api"
import { IBookSlug, IPostReview } from "./book-slug.interface"

const axiosGetBookSlug = async(slug?: string): Promise<IBookSlug> => {
    const response = await axiosClassic.get(`/all-books/${slug}`)
    return response.data.data
}

const axiosPostBookReport = async(form: IPostReview): Promise<void> => {
    const response = await axiosClassic.post('/reviews', form)
    return response.data
}

export { axiosGetBookSlug, axiosPostBookReport }