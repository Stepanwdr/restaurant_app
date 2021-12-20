import React from 'react';
import ShopCartOrderForm from "../../shop-cart-order-form/shop-cart-order-form";
import {BsCreditCard2Front} from "react-icons/bs";

const OrderModal = () => {
    return (
        <div className={"order-modal-overlay"}>
            <div className={"order-modal__content-wrapper"}>
                <div className="order-modal__header">
                    <BsCreditCard2Front size={"1.3em"} className={"order-page__left-icon"}/>
                    Order Details
                </div>
                <div className={"order-form-modal__content"}>
                    <ShopCartOrderForm/>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;