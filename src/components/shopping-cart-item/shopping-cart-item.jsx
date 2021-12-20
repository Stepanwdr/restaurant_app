import React from 'react';

import {AiOutlineCloseCircle} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../store/actions/cart";
import ChangeItemCount from "../change-item-count/change-item-count";
import "./shopping-cart-item.scss"
const ShoppingCartItem = ({item}) => {
    const dispatch=useDispatch()
    const handleClick=()=>{
dispatch(deleteItemFromCart(item.id))
    }
    return (
        <div className={"shopping-cart-item"}>
            <div className={"shopping-cart-item__left-col"}>
                <div className="shopping-cart-item__img" style={{backgroundImage:`url(${item.img})`}}>
                </div>
                <div className="shopping-cart-item__title">
                    {item.title}
                </div>
            </div>
            <div className={"shopping-cart-item__right-col"}>
                <div className="shopping-cart-item__price">
                    {`${item.price} AMD`}
                </div>
                <AiOutlineCloseCircle size={"1em"} className={"shopping-cart-item__del"} onClick={handleClick}/>
            </div>
            </div>

    );
};

export default ShoppingCartItem;