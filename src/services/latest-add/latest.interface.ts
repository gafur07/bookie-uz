import { IAudio, IReviews, Image } from "../index.interface"

export interface ILatestBookData {
    data: ILatestBookData[],
}

export interface ILatestBook {
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