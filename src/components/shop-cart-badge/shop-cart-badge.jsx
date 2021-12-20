import React from 'react';
import "./shop-cart-badge.scss"
import {HiOutlineShoppingBag} from "react-icons/hi";
import CartItemCount from "../cart-item-count/cart-item-count";
import {useDispatch, useSelector} from "react-redux";
import {openShopCartModal} from "../../store/actions/cart";
const ShopCartBadge = () => {
    const {isOpenModal,itemsInCart} = useSelector(state => state.cart)
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(openShopCartModal(isOpenModal))
    }
    return (
        <div className={"shop-cart-badge"} onClick={handleClick}>
            <HiOutlineShoppingBag size={"1.3em"} className={"shop-cart-badge__icon"}/>
            {itemsInCart.length?<CartItemCount count={itemsInCart.length}/>:""}
        </div>
    );
};

export default ShopCartBadge;