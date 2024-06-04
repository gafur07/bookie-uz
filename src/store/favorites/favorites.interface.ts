import { Audio, Image, Review } from "../cart/cart.interface"

export interface IFavorite {
    id: number
    quantity: string
    title: string
    description: string
    price: string
    language: string
    slug: string
    author: string
    image: Image[]
    reviews: Review[]
    audio: Audio[]
}

