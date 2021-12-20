export const SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD"
export default function setPaymentMethod(method) {
    return {
        type: SET_PAYMENT_METHOD,
        payload: {
            method
        }
    }
}