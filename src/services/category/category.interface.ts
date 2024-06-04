import { Image } from "../index.interface"


export interface ICategoryBooksData {
    data: ICatergoryInfo[],
}

export interface ICatergoryInfo {
    name: string
    books: BooksCategory[]
}

export interface BooksCategory {
    quantity: string
    title: string
    slug: string
    image: Image[]
  }