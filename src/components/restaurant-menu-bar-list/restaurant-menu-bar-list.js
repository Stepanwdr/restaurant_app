import { GiHamburger, GiSandwich, GiSushis} from "react-icons/gi";
import {FaCookieBite, FaHotdog, FaPizzaSlice} from "react-icons/fa";
import {BiDish, BiDrink} from "react-icons/bi";
import {CgCoffee} from "react-icons/cg";
import {GrIceCream} from "react-icons/gr";

export const MenuBarList = [
    {
        id:1,
        icon: <GiHamburger size={"1.5em"}/>,
        title:"Burgers",
        parents:true
    },
    {
        "id":2,
        "icon": <FaPizzaSlice size={"1.5em"}/>,
        "title":"Pizzas",
        "parents":true
    },
    {
        "id":3,
        "icon": <GiSandwich size={"1.5em"}/>,
        "title":"Sandwich",
        "parents":true
    },
    {
        "id":4,
        "icon": <BiDish size={"1.5em"}/>,
        "title":"Dishes",
        "parents":true
    },
    {
        "id":5,
        "icon": <GiSushis size={"1.5em"}/>,
        "title":"Sushis",
        "parents":true
    },{
        "id":6,
        "icon": <BiDrink size={"1.5em"}/>,
        "title":"Drinks",
        "parents":true
    },
    {
        "id":7,
        "icon": <FaCookieBite size={"1.5em"}/>,
        "title":"Cookies",
        "parents":true
    }, {
        "id":8,
        "icon": <CgCoffee size={"1.5em"}/>,
        "title":"Coffee",
        "parents":true
    }, {
        "id":9,
        "icon": <GrIceCream size={"1.5em"}/>,
        "title":"Frozen",
        "parents":true
    }, {
        "id":9,
        "icon": <FaHotdog size={"1.5em"}/>,
        "title":"Hotdog",
        "parents":true
    }
]