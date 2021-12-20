import React from 'react';
import pay1 from "../../assets/images/visa.png";
import pay2 from "../../assets/images/Arca.jpg";
import pay3 from "../../assets/images/maestro.png";
import pay4 from "../../assets/images/idram.png";
import pay5 from "../../assets/images/tellcell.png";
import "./payments-methods-comp.scss"
const PaymentsMethodsComp = () => {
    return (
        <div className={"payments-methods"}>
            <div className={"payments-methods__icon"} style={{backgroundImage:`url(${pay1})`}}></div>
            <div className={"payments-methods__icon"} style={{backgroundImage:`url(${pay2})`}}></div>
            <div className={"payments-methods__icon"} style={{backgroundImage:`url(${pay3})`}}></div>
            <div className={"payments-methods__icon"} style={{backgroundImage:`url(${pay4})`}}></div>
            <div className={"payments-methods__icon"} style={{backgroundImage:`url(${pay5})`}}></div>
        </div>
    );
};

export default PaymentsMethodsComp;