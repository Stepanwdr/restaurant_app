import React from 'react';
import RestaurantSelectItem from "../restaurant-select-item/restaurant-select-item";
import {useSelector} from "react-redux";

const RestaurantSelectList = () => {
const {restaurants}=useSelector(state=>state.restaurant)
    return (
        <ul className={"restaurant-select-list"}>
            {restaurants.map(restaurant=>
                <RestaurantSelectItem
                restaurant={restaurant}
                key={restaurant.id}

            />)}
        </ul>
    );
};

export default RestaurantSelectList;