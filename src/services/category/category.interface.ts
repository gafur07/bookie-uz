import { Image } from "../index.interface"


export interface ICategoryBooksData {
    data: ICategoryInfo[],
}

export interface ICategoryInfo {
    name: string
    books: BooksCategory[]
}

export interface BooksCategory {
    quantity: string
    title: string
    slug: string
    image: Image[]
  }