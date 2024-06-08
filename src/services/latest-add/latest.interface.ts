import { Image } from "../index.interface"

export interface ILatestBookData {
    data: ILatestBookData[],
}

export interface ILatestBook {
    quantity: string
    title: string
    slug: string
    image: Image[]
  }