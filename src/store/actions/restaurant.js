export const SET_SELECTED_RESTAURANT = "SET_SELECTED_RESTAURANT"
export default function setSelectedRestaurant(restaurant) {
    return {
        type: SET_SELECTED_RESTAURANT,
        payload: {
            restaurant
        }
    }
}