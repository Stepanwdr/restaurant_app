import React from 'react';
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";

const RestaurantPicker = ({onClick}) => {
    return (
        <div className={"restaurant-picker"}>
            <div className="restaurant-picker__arrow-up">
               <AiOutlineArrowUp/>
            </div>
            <div className="restaurant-picker__arrow-down">
                <AiOutlineArrowDown/>
            </div>
        </div>
    );
};

export default RestaurantPicker;