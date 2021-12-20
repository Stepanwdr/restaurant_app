import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import OrderTableItem from "../order-table-item/order-table-item";
import "./order-table.scss"
const OrderTable = () => {
    const {itemsInCart} =useSelector(state => state.cart)
useEffect(()=>{
    console.log("cmd")
},[itemsInCart])

    return (
        <table className={"order-table"}>
            <thead className={"order-table__head"}>
            <tr className={"order-table__title"}>
                <td className={"order-table__img"}>Item</td>
                <td className={"order-table__description"}></td>
                <td className={"order-table__price"}>Price</td>
                <td className={"order-table__quantity"}>Quantity</td>
                <td className={"order-table__total-price"}>Total Price</td>
                <td className={"order-table__action"}>Action</td>
            </tr>
            </thead>
            <tbody className={"order-table__body"}>
            {itemsInCart.map(i=><OrderTableItem key={i.id} item={i}/>)}
            </tbody>
        </table>
    );
};

export default OrderTable;