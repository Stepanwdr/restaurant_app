import React from 'react';
import LandingPage from "./pages/landing-page/landing-page";
import {Redirect, Route, Switch} from "react-router-dom";
import RestaurantPage from "./pages/restaurant-page/restaurant-page";
import OrderPage from "./pages/order-page/order-page";
const App = () => {
    return (
        <div className={"App"}>
            <Switch>
                <Route path={"/"} exact component={LandingPage}/>
                <Route path={'/restaurant/:restaurantId'} exact component={RestaurantPage}/>
                <Route path={'/order'} exact component={OrderPage}/>
                <Redirect to={"/"}/>
            </Switch>
        </div>
    );
};

export default App;