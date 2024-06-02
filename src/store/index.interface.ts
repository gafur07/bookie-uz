export * from "./bookSlug/book.slug.interface"

export interface IError {
    code: string,
    config: any,
    name: string,
    request: any,
    response: {
        data: {
            data: {
                message: string,
                error: string,
            }
        },
        status: number,
        statusText: string
    }
    stack: string
}