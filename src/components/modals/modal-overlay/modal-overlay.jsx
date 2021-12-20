import React from 'react';
import "./modal-overlay.scss"
import {useDispatch, useSelector} from "react-redux";
import {openShopCartModal} from "../../../store/actions/cart";

const ModalOverlay = ({close}) => {
    const {isOpenModal}=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    return(
        <div className={"modal-overlay"}
        onClick={()=>dispatch(openShopCartModal(isOpenModal))}>
        </div>
)};

export default ModalOverlay;