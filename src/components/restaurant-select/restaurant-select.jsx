import React, {useState} from 'react';
import RestaurantPicker from "../restaurant-picker/restaurant-picker";
import RestaurantSelectItem from "../restaurant-select-list/restaurant-select-list";
import  "./restaurant-select.scss"
import {useDispatch, useSelector} from "react-redux";
import Button from "../button/button";
import setSelectedRestaurant from "../../store/actions/restaurant";
import {useHistory} from "react-router-dom";
const RestaurantSelect = () => {
    const history=useHistory()
    const [listShow,setListShow]=useState(false)
    const {currentRestaurant}=useSelector(state=>state.restaurant)
    const dispatch=useDispatch()
    console.log(currentRestaurant?.url)
    const handleClick=(ev)=>{
        ev.stopPropagation()
        setListShow(!listShow)
       if (currentRestaurant){
           dispatch(setSelectedRestaurant())
           setListShow(true)
       }

    }
    return (
        <div className={"restaurant-select"}>
            <div className={"restaurant-select__top"} onClick={handleClick} >
                <div className="restaurant-select__top-header" >
                    {currentRestaurant?.title ?? "Select Restaurant"}
                </div>
                <div className="restaurant-select__restaurant-picker">
                    <RestaurantPicker />
                </div>
            </div>
            <div className="restaurant-select__bottom">
                {listShow && !currentRestaurant ? <RestaurantSelectItem/>:""}
            </div>
            {currentRestaurant?.title ? <Button onClick={()=>history.push(`/restaurant/${currentRestaurant.url}`)} type={"primary"}>Go Restaurant</Button>:""}
        </div>
    );
};

export default RestaurantSelect;