import axios from "axios"

export const baseURL = 'https://test.booky.uz/api'

export const axiosClassic = axios.create({
    baseURL
})

export const $axios = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'Application/json'
    }
})