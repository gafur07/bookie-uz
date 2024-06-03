import { Image } from "@/store/index.interface"

export interface ICategoryBooks {
    name: string 
}

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