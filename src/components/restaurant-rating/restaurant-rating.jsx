import React from 'react';
import "./restaurant-rating.scss"
import {BsStarFill} from "react-icons/bs";
import _ from "lodash"
const RestaurantRating = ({rating}) => {
    return (
        <div className={"restaurant-rating"}>
            {_.range(rating).map(i=>
                <BsStarFill className={"restaurant-rating__icon"}/>
            )}
        </div>
    );
};

export default RestaurantRating;