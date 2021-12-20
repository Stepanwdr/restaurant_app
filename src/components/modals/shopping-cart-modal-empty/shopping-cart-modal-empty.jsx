import React from 'react';
import emptyCart from "../../../assets/images/empty-cart.svg";
import "./shopping-cart-modal-empty.scss"
const ShoppingCartModalEmpty = () => {
    return (
        <div className={"shopping-cart-modal-empty"}>
            <h3 className={"shopping-cart-modal-empty__text"}>
                Cart is empty
            </h3>
            <div className={"shopping-cart-modal-empty__img"} style={{backgroundImage: `url(${emptyCart})`}}>
            </div>
        </div>
    );
};

export default ShoppingCartModalEmpty;