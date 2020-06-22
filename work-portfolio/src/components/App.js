import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
