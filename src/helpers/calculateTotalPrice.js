export const calculateTotalPrice=(itemsInCart)=>{
    return itemsInCart.reduce((acc,item)=>acc+=item.price*item.count,0)
}