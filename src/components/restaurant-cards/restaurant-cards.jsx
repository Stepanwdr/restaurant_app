import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, useHistory} from "react-router-dom";
import RestaurantCardItem from "../restaurant-card-item/restaurant-card-item";
import "./restaurant-cards.scss"
const RestaurantCards = () => {
    const {menu=""} = useSelector(state => state.restaurant.currentRestaurant)
    const history=useHistory()
    const {burgers}=menu
    if(!burgers){
        history.push("/")
    }
    return (
        <ul className={"restaurant-cards"}>
            {burgers?.map(burger=>
                <RestaurantCardItem key={burger.id} item={burger}/>
            )}
        </ul>
    );
};

export default RestaurantCards;