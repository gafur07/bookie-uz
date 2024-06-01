export interface IBookSlug {
    title: string,
    description: string,
    price: string,
    categroy: object[],
    author: object[],
    reviews: object[]
}


export interface IBookSlugState {
    bookSlug: IBookSlug,
    loading: boolean
}