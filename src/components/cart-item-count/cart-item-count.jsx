import React from 'react';
import "./cart-item-count.scss"
const CartItemCount = ({count}) => {
    return (
        <span className={"cart-item-count"}>
            {count}
        </span>
    );
};
export default CartItemCount;