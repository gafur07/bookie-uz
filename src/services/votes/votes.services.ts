import { axiosClassic } from "@/api/axios.interceptors";
import { IVotes, IVotesData, IVotesRemove } from "./votes.interface";

const fetchGetVotes = async(slug: string | undefined): Promise<IVotes> => {
    const response = await axiosClassic.get(`/voting?book=${slug}`)
    return response.data
}

const fetchPostVotes = async(data: IVotesData):Promise<IVotes> => {
    const response = await axiosClassic.post('/voting', data)
    return response.data
}

const fetchDeleteVotes = async(data: IVotesRemove):Promise<IVotes> => {
    const response = await axiosClassic.delete(`/voting?slug=${data.slug}?vote_id=${data.vote_id}`)
    return response.data
}

export { fetchGetVotes, fetchPostVotes, fetchDeleteVotes }