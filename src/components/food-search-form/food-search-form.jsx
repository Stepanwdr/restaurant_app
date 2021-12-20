import "./food-search-form.scss"
import React from 'react';
import {GoSearch} from "react-icons/go";

const FoodSearchForm = () => {
    return (
        <div className={"food-search-form"}>
            <form>
                <div className="food-search-form__col">
                        <GoSearch className={"food-search-form__icon"}/>
                    <input type="text" placeholder={"search burgers"} className={"food-search-form__input"}/>
                </div>
            </form>
        </div>

    );
};

export default FoodSearchForm;