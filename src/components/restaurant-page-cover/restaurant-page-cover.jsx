import React from 'react';
import cover from "../../assets/images/cover.jpg"
import "./restaurant-page-cover.scss"
import RestaurantPageLogo from "../restaurant-page-logo/restaurant-page-logo";
import {useSelector} from "react-redux";
import RestaurantRating from "../restaurant-rating/restaurant-rating";


const RestaurantPageCover = () => {
    const {currentRestaurant}=useSelector(state=>state.restaurant)
    return (
        <div className={"restaurant-page-cover"} style={{backgroundImage: `url(${cover})`}}>
            <RestaurantPageLogo/>
            <h2 className="restaurant-page-cover__title">
                {currentRestaurant.title}
            </h2>
            <div className="restaurant-page-cover__rating">
                <RestaurantRating rating={currentRestaurant.rating}/>
            </div>
        </div>
    );
};

export default RestaurantPageCover;