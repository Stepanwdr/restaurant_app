export const ORDER_ITEMS = " ORDER_ITEMS";
export function orderItems(formData) {
    return {
        type:  ORDER_ITEMS,
        payload: {
            formData
        }
    }
}