import React from 'react';
import Header from "../header/header";
import {useSelector} from "react-redux";
import ShoppingCartModal from "../modals/shopping-cart-modal/shopping-cart-modal";
import ModalOverlay from "../modals/modal-overlay/modal-overlay";

const Wrapper = ({children}) => {
    const {isOpenModal} = useSelector(state => state.cart)
    return (
        <div className={"wrapper"}>
            <Header/>
            {isOpenModal ?
                <>
                    <ShoppingCartModal/>
                    <ModalOverlay/>
                </>
                : ""}
            {children}
        </div>
    );
};

export default Wrapper;