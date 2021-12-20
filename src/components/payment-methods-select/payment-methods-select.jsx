import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import setPaymentMethod from "../../store/actions/payment";
import "./payment-methods-select.scss"
const PaymentMethodsSelect = () => {
    const {paymentMethods,currentMethod}=useSelector(state=>state.payment)
    const dispatch=useDispatch()
    const handleClick=(method)=>{
        dispatch(setPaymentMethod(method))
    }
    return (
        <div className={"payment-methods-select"}>
            {
                paymentMethods?.map(method=>
                    (
                 <div
                    className={`payment-methods-select__item ${currentMethod.id===method.id ? "payment-methods-select__item--active":""}`}
                    style={{ backgroundImage: `url(${method?.img})`} }
                    onClick={()=>handleClick(method)}>
                     <h5>{method.title}</h5>
                </div>
                    ))
            }
        </div>
    );
};

export default PaymentMethodsSelect;