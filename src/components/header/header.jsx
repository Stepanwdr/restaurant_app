import "./header.scss"
import React from 'react';
import Logo from "../logo/logo";
import {FaHamburger} from "react-icons/fa";
import ShopCartBadge from "../shop-cart-badge/shop-cart-badge";
import ShoppingCartModal from "../modals/shopping-cart-modal/shopping-cart-modal";
import ModalOverlay from "../modals/modal-overlay/modal-overlay";
const Header = () => {
    return (
        <div className={"header"}>
            <div className="header__left-col">
               <div className="header__burger-icon">
                   <FaHamburger/>
               </div>
                <div className="header__branding">
                    <Logo title={"Food Time"}/>
                </div>
            </div>
            <div className="header__right-col">
                <div className={"header__right-menu"}>
                    <div className="header__menu-item">
                        My account
                    </div>
                </div>
                <ShopCartBadge/>
            </div>
        </div>
    );
};

export default Header;