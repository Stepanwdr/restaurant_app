import React from 'react';
import "./logo.scss"
const Logo = ({title}) => {
    return (
        <div className={"logo"}>
            <span className={"logo__title"}>
                {title}
            </span>
        </div>
    );
};

export default Logo;