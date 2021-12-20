import React from 'react';
import {useDispatch} from "react-redux";
import setSelectedRestaurant from '../../store/actions/restaurant'
import "./restaurant-select-item.scss"
const RestaurantSelectItem = ({restaurant}) => {
    const dispatch=useDispatch()
    const handleClick=()=>{
dispatch(setSelectedRestaurant(restaurant))
    }
    return (
            <li className={"restaurant-select-item"}
            onClick={handleClick}
            >
                {restaurant.title}
            </li>
    );
};

export default RestaurantSelectItem;