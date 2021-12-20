import React from 'react';
import "./restaurant-page-logo.scss"
import logo from "./../../assets/images/logo1.jpg"
const RestaurantPageLogo = () => {
    return (
        <div className={"restaurant-page-logo"} style={{backgroundImage:`url(${logo})`}}>

        </div>
    );
};

export default RestaurantPageLogo;