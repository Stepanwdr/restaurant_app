import {ADD_TO_CART,  DELETE_ITEM_FROM_CART, SET_ITEM_COUNT,BUY_ITEMS} from "../actions/cart";
import {SHOP_CART_MODAL_SHOW} from "../actions/cart";
import _ from "lodash"
const initialState = {
    itemsInCart:[],
    orderedItemsData:{}
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            let myItem={}
            let {item} = action.payload
            myItem={...item,count:1}
            state.itemsInCart.push(myItem)
            return {
                ...state,
            }
        }
        case DELETE_ITEM_FROM_CART:{
            const {id} = action.payload
            let filteredItems=[]
            console.log(id,55555)
            filteredItems=state.itemsInCart.filter(item=>item.id!==id)
            console.log(filteredItems)
            return {
                ...state,
                itemsInCart:filteredItems
            }
        }

        case SHOP_CART_MODAL_SHOW:{
            const {isOpenModal} = action.payload
            return {
                ...state,
                isOpenModal:!isOpenModal
            }
        }
            case SET_ITEM_COUNT:{
                const {id,count} = action.payload
               let filteredItem=state.itemsInCart.filter(item=>item.id===id)
                let item=_.set(...filteredItem,"count",count)
                console.log(item,9999)
                return {
                    ...state,
                }
            }

        default: {
            return state
        }
    }
}