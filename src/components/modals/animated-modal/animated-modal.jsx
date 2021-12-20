import React from 'react';
import "./animated-modal.scss";
import {useSelector} from "react-redux"
const AnimatedModal = ({children,close}) => {
const {orderedItemsData}=useSelector(state=>state.cart)
    const handleClose=(ev)=>{
       console.log(orderedItemsData)
       close()
    }
    return(
       <div  className="animated-modal-overlay"  onClick={handleClose}>
           <div className='animated-modal-content-wrapper'>
           <div className="animated-modal-content">
      dhsfjsdhfjksdhfjksdhf
        </div>
        </div>
    </div>
    );
};

export default AnimatedModal;