import {combineReducers} from "redux";
import restaurant from './restaurant'
import cart from "./cart"
import payment from "./payment"
import order from "./order"
export default combineReducers(
    {
        restaurant,
        cart,
        payment,
        order
    }
)
