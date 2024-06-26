import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    openPayment: false
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        openModalPayment: (state) => {
            state.openPayment = true
        },
        closeModalPayment: (state) => {
            state.openPayment = false
        }
    }
})

export default paymentSlice.reducer;
export const { openModalPayment, closeModalPayment } = paymentSlice.actions;