import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/lib/PrivateRoute/PrivateRoute";

import PageDAccueil from "./screen/PageDAccueilScreen";
import BieresScreen from "./screen/BieresScreen";
import BeerBeer from "./screen/BeerBeer";
import PaymentScreen from "./screen/PaymentScreen";
import PaymentsRegisterScreen from "./screen/PaymentsRegisterScreen";
import PanierScreen from "./screen/PanierScreen";
import SoftScreen from "./screen/SoftScreen";
import CocktailVinScreen from "./screen/CocktailVinScreen";
import PlanchesScreen from "./screen/PlanchesScreen";
import RegisterPageScreen from "./screen/RegisterPageScreen";
import LoginPageScreen from "./screen/LoginPageScreen";
import CartScreen from "./screen/CartScreen";
import HomeScreen from "./screen/HomeScreen";
import OderSummaryScreen from "./screen/OderSummaryScreen";

class App extends Component {
  render() {
    function refreshPage() {
      window.location.reload();
    }
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/webapp"
            onClick={refreshPage}
            component={PageDAccueil}
          />
          <Route
            exact
            path="/RegisterPageScreen"
            component={RegisterPageScreen}
          />
          <Route exact path="/LoginPageScreen" component={LoginPageScreen} />
          <Route exact path="/BieresScreen" component={BieresScreen} />
          <Route exact path="/BeerBeer" component={BeerBeer} />
          <Route exact path="/PaymentScreen" component={PaymentScreen} />
          <PrivateRoute
            exact
            path="/PaymentsRegisterScreen"
            component={PaymentsRegisterScreen}
          />
          <Route exact path="/PanierScreen" component={PanierScreen} />
          <Route exact path="/SoftScreen" component={SoftScreen} />
          <Route
            exact
            path="/CocktailVinScreen"
            component={CocktailVinScreen}
          />
          <Route exact path="/PlanchesScreen" component={PlanchesScreen} />
          <Route path="/CartScreen" component={CartScreen} />
          <Route path="/HomeScreen" component={HomeScreen} />
          <Route path="/OderSummaryScreen" component={OderSummaryScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
