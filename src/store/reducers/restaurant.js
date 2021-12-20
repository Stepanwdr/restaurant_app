import {SET_SELECTED_RESTAURANT} from "../actions/restaurant";
import img1 from "../../assets/images/clasicburger.jpeg";
import img2 from "../../assets/images/AmericanaBurger.jpg";
import img3 from "../../assets/images/swish.jpeg";
import img4 from "../../assets/images/mozzarella.jpeg";
import img5 from "../../assets/images/greck.jpeg";
const initialState = {
    currentRestaurant:{},
restaurants: [
    {
        id: 1,
        title: "Hot Burger Americana",
        url: "hot-burger-americana",
        rating:5,
        menu: {
            burgers: [
                {
                    id: 1,
                    title: "Classic Cheese regular",
                    ingredients: "beef patty, cheddar cheese",
                    price: 2200,
                    img: img1,
                    rating: 5,
                    isAvailable:false,
                },
                {
                    id: 2,
                    title: "American cheeseburger",
                    ingredients: "beef patty, Cheddar cheese",
                    price: 2500,
                    img: img2,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 3,
                    title: "Swiss and mushroom burger",
                    ingredients: "beef patty, mushroom sauce",
                    price: 2500,
                    img: img3,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 4,
                    title: "Classic Mozzarella burger..",
                    ingredients: "beef patty, breaded, Mozzarela..",
                    price: 2400,
                    img: img4,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 5,
                    title: "Greek burger",
                    ingredients: "beef patty, tzatziki sauce, mix ...",
                    price: 2400,
                    img: img5,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 6,
                    title: "Classic Cheese regular",
                    ingredients: "beef patty, cheddar cheese",
                    price: 2200,
                    img: img1,
                    rating: 5,
                    isAvailable:false,
                },
                {
                    id: 7,
                    title: "American cheeseburger",
                    ingredients: "beef patty, Cheddar cheese",
                    price: 2500,
                    img: img2,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 8,
                    title: "Swiss and mushroom burger",
                    ingredients: "beef patty, mushroom sauce",
                    price: 2500,
                    img: img3,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 9,
                    title: "Classic Mozzarella burger..",
                    ingredients: "beef patty, breaded, Mozzarela..",
                    price: 2400,
                    img: img4,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 10,
                    title: "Greek burger",
                    ingredients: "beef patty, tzatziki sauce, mix ...",
                    price: 2400,
                    img: img5,
                    rating: 5,
                    isAvailable:true,
                }
            ]

        }
    },
    {
        id: 2,
        title: "Hot Burger Shwarma",
        url: "hot-burger-shwarma",
        rating:5,
        menu: {
            burgers: [
                {
                    id: 1,
                    title: "Classic Cheese regular",
                    ingredients: "beef patty, cheddar cheese",
                    price: 2200,
                    img: img1,
                    rating: 5,
                    isAvailable:false,
                },
                {
                    id: 2,
                    title: "American cheeseburger",
                    ingredients: "beef patty, Cheddar cheese",
                    price: 2500,
                    img: img2,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 3,
                    title: "Swiss and mushroom burger",
                    ingredients: "beef patty, mushroom sauce",
                    price: 2500,
                    img: img3,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 4,
                    title: "Classic Mozzarella burger..",
                    ingredients: "beef patty, breaded, Mozzarela..",
                    price: 2400,
                    img: img4,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 5,
                    title: "Greek burger",
                    ingredients: "beef patty, tzatziki sauce, mix ...",
                    price: 2400,
                    img: img5,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 6,
                    title: "Classic Cheese regular",
                    ingredients: "beef patty, cheddar cheese",
                    price: 2200,
                    img: img1,
                    rating: 5,
                    isAvailable:false,
                },
                {
                    id: 7,
                    title: "American cheeseburger",
                    ingredients: "beef patty, Cheddar cheese",
                    price: 2500,
                    img: img2,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 8,
                    title: "Swiss and mushroom burger",
                    ingredients: "beef patty, mushroom sauce",
                    price: 2500,
                    img: img3,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 9,
                    title: "Classic Mozzarella burger..",
                    ingredients: "beef patty, breaded, Mozzarela..",
                    price: 2400,
                    img: img4,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 10,
                    title: "Greek burger",
                    ingredients: "beef patty, tzatziki sauce, mix ...",
                    price: 2400,
                    img: img5,
                    rating: 5,
                    isAvailable:true
                }
            ]

        },
    },
    {
        id: 3,
        title: "Hot Burger Mega",
        url: "hot-burger-mega",
        rating:5,
        menu: {
            burgers: [
                {
                    id: 1,
                    title: "Classic Cheese regular",
                    ingredients: "beef patty, cheddar cheese",
                    price: 2200,
                    img: img1,
                    rating: 5,
                    isAvailable:false,
                },
                {
                    id: 2,
                    title: "American cheeseburger",
                    ingredients: "beef patty, Cheddar cheese",
                    price: 2500,
                    img: img2,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 3,
                    title: "Swiss and mushroom burger",
                    ingredients: "beef patty, mushroom sauce",
                    price: 2500,
                    img: img3,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 4,
                    title: "Classic Mozzarella burger..",
                    ingredients: "beef patty, breaded, Mozzarela..",
                    price: 2400,
                    img: img4,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 5,
                    title: "Greek burger",
                    ingredients: "beef patty, tzatziki sauce, mix ...",
                    price: 2400,
                    img: img5,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 6,
                    title: "Classic Cheese regular",
                    ingredients: "beef patty, cheddar cheese",
                    price: 2200,
                    img: img1,
                    rating: 5,
                    isAvailable:false,
                },
                {
                    id: 7,
                    title: "American cheeseburger",
                    ingredients: "beef patty, Cheddar cheese",
                    price: 2500,
                    img: img2,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 8,
                    title: "Swiss and mushroom burger",
                    ingredients: "beef patty, mushroom sauce",
                    price: 2500,
                    img: img3,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 9,
                    title: "Classic Mozzarella burger..",
                    ingredients: "beef patty, breaded, Mozzarela..",
                    price: 2400,
                    img: img4,
                    rating: 5,
                    isAvailable:true,
                },
                {
                    id: 10,
                    title: "Greek burger",
                    ingredients: "beef patty, tzatziki sauce, mix ...",
                    price: 2400,
                    img: img5,
                    rating: 5,
                    isAvailable:true,
                }
            ]

        },
    }
]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_RESTAURANT: {
            const {restaurant} = action.payload
            return {
                ...state,
                currentRestaurant:restaurant
            }
        }
        default: {
            return state
        }
    }
}