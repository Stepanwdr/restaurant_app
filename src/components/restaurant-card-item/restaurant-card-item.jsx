import React, {useEffect, useState} from 'react';
import "./restaurant-card-item.scss"
import Button from "../button/button";
import {MdAddShoppingCart, MdOutlineDeleteForever} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, addToCart} from "../../store/actions/cart";

const RestaurantCardItem = ({item}) => {
    let [isExist, setExist] = useState(true)
    const {itemsInCart} = useSelector(state => state.cart)
    const dispatch = useDispatch()
 useEffect(()=>{
     isExist = itemsInCart.some(food => food.id === item.id)
     setExist(!isExist)
 },[itemsInCart])
    const handleClick = () => {
        isExist = itemsInCart.some(food => food.id === item.id)
        if (!isExist){
            dispatch(addToCart(item))
            setExist(false)
        } else {
            dispatch(deleteItemFromCart(item.id))
            setExist(true)

        }
    }
    return (
        <li className={`restaurant-card-item ${item.isAvailable?? "available"}`}>
            <div className="restaurant-card-item__header" style={{backgroundImage: `url(${item.img})`}}>
                {/*<span className={"restaurant-card-item__header-text"}>{!item.isAvailable?"":"ITEM NOT AVAILABLE"}</span>*/}
            </div>
            <div className="restaurant-card-item__body">
                <div className="restaurant-card-item__img" style={{backgroundImage: `url(${item.img})`}}>
                </div>
                <span className={"restaurant-card-item__title"}>
                 {item?.title}
            </span>
                <span className={"restaurant-card-item__ingredients"}>
                 {item?.ingredients}
            </span>
                <span className={"restaurant-card-item__price"}>
                 {item?.price + "AMD" }
            </span>
                {isExist ?
                    <Button type={"primary"}
                            onClick={handleClick}
                    ><MdAddShoppingCart/>
                        Add to Cart
                    </Button> :
                    <Button type={"secondary"}
                            onClick={handleClick}
                    ><MdOutlineDeleteForever/>
                        Delete from cart
                    </Button>}
            </div>

        </li>
    );
};

export default RestaurantCardItem;