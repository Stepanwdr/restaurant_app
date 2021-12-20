import React from 'react';
import classNames from "classnames";
import "./button.scss"
const Button = ({children,onClick,type,size="s"}) => {
    const btnClass=classNames({
        "btn":true,
        "btn--primary":type==="primary",
        "btn--secondary":type==="secondary",
        "btn--black":type==="black",
        "btn--small":size==="s",
        "btn--medium":size==="m",
        onClick
    })
    return (
        <button className={btnClass}
             onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;