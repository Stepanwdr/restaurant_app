import React, {useMemo, useState} from 'react';
import {useDispatch} from "react-redux";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {deleteItemFromCart} from "../../../store/actions/cart";
import "./order-table-item.scss"
import ChangeItemCount from "../../change-item-count/change-item-count";
const OrderTableItem = ({item}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteItemFromCart(item.id))
    }
    return (
        <tr className={"order-item"}>
            <td>
                <div className="order-item__img" style={{backgroundImage: `url(${item.img})`}}>
                </div>
            </td>
            <td>
                <span  className="order-item__title">
                      {item.title}
                </span>
            </td>
            <td>
                <span className="order-item__price">{`${item.price} AMD`}</span>
            </td>
            <td>
             <span className={"order-item__change-count"}><ChangeItemCount item={item} /></span>
            </td>
            <td>
                <span className="order-item__total-price">{`${item.price * item.count} AMD`}</span>
            </td>
            <td>
                <AiOutlineCloseCircle size={"1em"} className={"order-item__del"} onClick={handleClick}/>
            </td>
        </tr>
    );
};


export default OrderTableItem;