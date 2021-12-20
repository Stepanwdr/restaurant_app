import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {openShopCartModal} from "../../../store/actions/cart";
import ShoppingCartItem from "../../shopping-cart-item/shopping-cart-item";
import {calculateTotalPrice} from "../../../helpers/calculateTotalPrice";
import ShoppingCartModalEmpty from "../shopping-cart-modal-empty/shopping-cart-modal-empty";
import Button from "../../button/button";
import "./shopping-cart-modal.scss"
const ShoppingCartModal = () => {
    const {itemsInCart, isOpenModal} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        dispatch(openShopCartModal(isOpenModal))
    }
    const checkOrder = () => {
        dispatch(openShopCartModal(isOpenModal))
        history.push("/order")
    }
    return (
        <div className={"shopping-cart-modal"}>
            <div className="shopping-cart-modal__header">
                <h2 className={"shopping-cart-modal__header-text"}>
                    Shopping Cart
                </h2>
                <AiOutlineCloseCircle size={"1.5em"} className={"shopping-cart-modal__close"} onClick={handleClick}/>
            </div>
            <div className="shopping-cart-modal__body">

                {itemsInCart.length
                    ?
                    itemsInCart.map(item =>
                        <ShoppingCartItem item={item}/>)
                    : <ShoppingCartModalEmpty/>
                }
            </div>
            {itemsInCart.length
                ?
                <div className="shopping-cart-modal__footer">
                    <div className="shopping-cart-modal__total-price-label">
                        Total Price
                    </div>
                    <div className="shopping-cart-modal__total-price-count">
                        {calculateTotalPrice(itemsInCart) + " AMD"}
                    </div>
                    <Button type={"primary"} onClick={checkOrder}>Check Order</Button>
                </div> : null}

        </div>
    );
};

export default ShoppingCartModal;