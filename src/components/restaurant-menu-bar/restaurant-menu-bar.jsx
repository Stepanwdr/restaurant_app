import React from 'react';
import {MenuBarList} from "../restaurant-menu-bar-list/restaurant-menu-bar-list";
import "./restaurant-menu-bar.scss"
import {IoIosArrowForward} from "react-icons/io";
const RestaurantMenuBar = () => {
    return (
        <ul className={"restaurant-menu-bar"}>
            {MenuBarList.map(menu=>
            <li key={menu.id} className={"restaurant-menu-bar__item"}>
                <span className={"restaurant-menu-bar__icon"}>
                    {menu.icon}
                </span>
              <span className={"restaurant-menu-bar__title"}>
                  {menu.title}
              </span>
                    <IoIosArrowForward className={"restaurant-menu-bar__right-arrow"}/>
            </li>
            )}
        </ul>
    );
};

export default RestaurantMenuBar;