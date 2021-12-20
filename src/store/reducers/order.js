import {ORDER_ITEMS} from "../actions/order";
const initialState={
orderData:{
    orderedItems:[],
    orderDetails:[],
}
}
export default function reducer(state = initialState, action) {
    switch (action.type){
        case ORDER_ITEMS:{
            const {formData}=action.payload
            console.log(formData)
            return{
                ...state,
                orderData:formData
            }
        }

        default:{
            return state
        }
    }
}
