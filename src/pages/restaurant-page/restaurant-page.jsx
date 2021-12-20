import React from 'react';
import RestaurantPageCover from "../../components/restaurant-page-cover/restaurant-page-cover";
import RestaurantMenuBar from "../../components/restaurant-menu-bar/restaurant-menu-bar";
import RestaurantCards from "../../components/restaurant-cards/restaurant-cards";
import "./restaurant-page.scss"
import Wrapper from "../../components/wrapper/wrapper";
const RestaurantPage = () => {
    return (
        <Wrapper>
            <div className={"restaurant-page"}>
                <div className="restaurant-page__content">
                    <div className="restaurant-page__col-first">
                        <RestaurantMenuBar/>
                    </div>
                    <div className="restaurant-page__col-second">
                        <div className="restaurant-page__header">
                            <RestaurantPageCover/>
                        </div>
                        <RestaurantCards/>
                    </div>
                </div>
            </div>

        </Wrapper>
    );
};

export default RestaurantPage;


