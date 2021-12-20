import React from 'react';
import RestaurantSelect from "../../components/restaurant-select/restaurant-select";
import "./landing-page.scss"
import bg from "../../assets/images/landingBg.jpg"
const LandingPage = () =>{
    return (
        <div className={"landing-page"}>
            <div className="landing-page__content">
                <div className={"landing-page__left"}>
                 <RestaurantSelect/>
                </div>
                <div className={"landing-page__right"} style={{backgroundImage:`url(${bg})`}}>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;