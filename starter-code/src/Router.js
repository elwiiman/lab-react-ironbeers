import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeMenu from "./components/home/HomeMenu";
import List from "./components/List";
const Router = () => (
  <Switch>
    <Route exact path="/" component={HomeMenu} />
    <Route path="/allbeers" component={List} />
  </Switch>
);

export default Router;
