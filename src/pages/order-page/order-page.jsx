import React, {useState}from 'react';
import {HiOutlineShoppingBag} from "react-icons/hi";
import Wrapper from "../../components/wrapper/wrapper";
import OrderTable from "../../components/tables/order-table/order-table";
import {MdOutlinePayments} from "react-icons/md";
import {BsCreditCard2Front} from "react-icons/bs";
import Button from "../../components/button/button";
import {buyItems} from "../../store/actions/cart";
import PaymentsMethodsComp from "../../components/payments-methods-comp/payments-methods-comp";
import {useSelector,useDispatch} from "react-redux";
import ShoppingCartModalEmpty from "../../components/modals/shopping-cart-modal-empty/shopping-cart-modal-empty";
import ShopCartOrderForm from "../../components/shop-cart-order-form/shop-cart-order-form";
import PaymentMethodsSelect from "../../components/payment-methods-select/payment-methods-select";
import CreditCard from "../../components/credit-card/credit-card";
import {calculateTotalPrice} from "../../helpers/calculateTotalPrice";
import AnimatedModal from "../../components/modals/animated-modal/animated-modal";
import "./order-page.scss"
import {orderItems} from "../../store/actions/order";
const OrderPage = () => {
    const {itemsInCart} = useSelector(state => state.cart)
    const {} = useSelector(state => state.order)
    const [open,setOpen]=useState(false)
    const [checked,setChecked]=useState(false)
    const dispatch=useDispatch()
    const handleClick=()=>{
        if(checked){
            setOpen(true)
        }


    }
    return (
        <Wrapper>
            <div className={"order-page"}>
                <div className="order-page__content">
                    <div className="order-page__left">
                        <div className="order-page__left-title">
                            <HiOutlineShoppingBag size={"1.3em"} className={"order-page__left-icon"}/>
                            Cart Items
                        </div>
                        {itemsInCart?.length ? (
                            <>
                                <OrderTable/>
                                <div className="order-page__left-title">
                                    <MdOutlinePayments size={"1.3em"} className={"order-page__left-icon"}/>
                                    Payments Methods
                                </div>
                                <div className="order-page__left-payment-select">
                                    <PaymentMethodsSelect/>
                                </div>
                                <div className="order-page__left-title">
                                    <BsCreditCard2Front size={"1.3em"} className={"order-page__left-icon"}/>
                                    Order Details
                                </div>
                                <div className="order-page__left-order-details">

                                </div>
                                <div className="order-page__left-form">
                                    <ShopCartOrderForm/>
                                </div>
                            </>
                        ) : <ShoppingCartModalEmpty/>}
                    </div>

                    <div className="order-page__right">
                        <div className="order-page__right-head">
                            <span className={"order-page__right-title"}>Total</span>
                            <h1 className={"order-page__right-total-price"}>{calculateTotalPrice(itemsInCart)} AMD</h1>
                        </div>
                        <div className="order-page__right-body">
                            <div className="order-page__right-methods">
                                <CreditCard/>
                                <PaymentsMethodsComp/>
                            </div>
                        </div>
                        <div className="order-page__right-footer">
                            <div className="order-page__right-form">
                                <input type="checkbox" name={"Agree"} value={checked} required onChange={()=>setChecked(!checked)}/>
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                            <Button type={"primary"} onClick={handleClick}>
                                Buy
                            </Button>
                        </div>
                    </div>
                </div>
               { open && (<AnimatedModal close={()=>setOpen(false)}>
            </AnimatedModal>
            )}
            </div>
        </Wrapper>
    );
};

export default OrderPage;
