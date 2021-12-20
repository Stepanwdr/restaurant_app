export const ADD_TO_CART = "ADD_TO_CART";
export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: {
            item
        }
    }
}

export const SHOP_CART_MODAL_SHOW = "SHOP_CART_MODAL_SHOW";
export function openShopCartModal(isOpenModal) {
    return {
        type: SHOP_CART_MODAL_SHOW ,
        payload: {
            isOpenModal
        }
    }
}
export const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
export function deleteItemFromCart(id) {
    return {
        type: DELETE_ITEM_FROM_CART,
        payload: {
            id
        }
    }
}
export const SET_ITEM_COUNT = "SET_ITEM_COUNT";
export  function setItemCount(id,count) {
    return {
        type: SET_ITEM_COUNT,
        payload: {
            id,
            count
        }
    }
}
export const BUY_ITEMS = "BUY_ITEMS";
export  function buyItems(formData) {
    return {
        type: BUY_ITEMS,
        payload: {
            formData
        }
    }
}
