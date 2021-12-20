import {SET_PAYMENT_METHOD} from "../actions/payment";
import cash from "../../assets/images/mone.png";
import card from "../../assets/images/bigCard.png";
import iDram from "../../assets/images/idram.png";
import tellCell from "../../assets/images/tellcell.png";

const initialState = {
    paymentMethods: [
        {id: 1, title: "Cash", img: cash},
        {id: 2, title: "Card", img: card},
        {id: 3, title: "iDram", img: iDram},
        {id: 4, title: "TellCell", img: tellCell}
    ],
    currentMethod: {},
    formData:{}
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAYMENT_METHOD: {
            let currentMethod = {};
            const {method} = action.payload
            currentMethod = method
            return {
                ...state,
                currentMethod
            }
        }
        default: {
            return state
        }
    }
}
