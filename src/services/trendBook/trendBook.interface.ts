import { IAudio, IBookSlug, IReviews, Image } from "../index.interface"

export interface ITrendBookData {
    data: IBookSlug[],
}

export interface ITrendBook {
    id: number
    quantity: string
    title: string
    description: string,
    language: string
    price: string
    author: string
    slug: string
    image: Image[]
    audio: IAudio[]
    reviews: IReviews[]
  }