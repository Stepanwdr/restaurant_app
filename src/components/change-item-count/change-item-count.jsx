import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteItemFromCart, setItemCount} from "../../store/actions/cart";
import "./change-item-count.scss"
const ChangeItemCount = ({item}) => {
    const [itemCount,changeItemCount]=useState(1)
    const dispatch=useDispatch()
   const handleChange=(ev)=>{
           changeItemCount(+ev.target.value)
    }
    const handleBlur=(ev)=>{
        if(+ev.target.value>= 1){
            changeItemCount(+ev.target.value)
            dispatch(setItemCount(item?.id,itemCount))
        }else{
            dispatch(deleteItemFromCart(item?.id))
        }
    }
    const setCountIncrement=()=>{
      changeItemCount(itemCount+1)
        dispatch(setItemCount(item.id,itemCount+1))
    }
    const setCountDecrement=()=>{
        if(itemCount> 1){
            changeItemCount(itemCount-1)
            dispatch(setItemCount(item.id,itemCount-1))
        }else{
            dispatch(deleteItemFromCart(item?.id))
        }

    }
    return (
        <div className={"change-item-count"}>
            <div className={"change-item-count__change-btn"} onClick={setCountDecrement}>
          -
            </div>
               <input type="number" value={itemCount} onChange={handleChange} onBlur={handleBlur} className={"change-item-count__input"}/>
            <div className={"change-item-count__change-btn"} onClick={setCountIncrement}>
            +
            </div>
        </div>
    );
};

export default ChangeItemCount;