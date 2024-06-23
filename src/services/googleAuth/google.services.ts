import { axiosClassic } from "@/api"

const fetchGetGoogleDirect = async() => {
    const response = await axiosClassic.get('/v2/auth/google/redirect')
    return response.data
}

const fetchGetGoogleCallback = async() => {
    const response = await axiosClassic.post('/v2/auth/google/callback')
    return response.data
}

export { fetchGetGoogleCallback, fetchGetGoogleDirect }