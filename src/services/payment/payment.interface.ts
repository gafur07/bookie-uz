export interface IPayment {
    books: number[],
    payment_id?: number
}

export interface IPaymentData {
    id: number
    is_paid: unknown | null,
    url: string
}