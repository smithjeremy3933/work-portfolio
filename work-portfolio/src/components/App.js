import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Portfolio from "../pages/Portfolio";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/portfolio" exact component={Portfolio} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
