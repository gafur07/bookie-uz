import { axiosClassic } from "@/api"
import { IPayment, IPaymentData } from "./payment.interface"
import { IResponseSingleData } from "../index.interface"

const postPayment = async(data: IPayment):Promise<IResponseSingleData<IPaymentData>> => {
    const res = await axiosClassic.post('/orders', data)
    return res.data
}

export {postPayment}