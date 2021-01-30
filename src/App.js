import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TravelPlace from "./components/TravelPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/travel-detail/:name/:image" component={TravelPlace} />
      </Switch>
    </Router>
  );
};

export default App;
