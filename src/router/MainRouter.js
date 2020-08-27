import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "router/routes";

import LandingPage from "pages/LandingPage/LandingPage";
import LearningApp from "router/LearningApp";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={LandingPage} />
        <Route path={routes.app} component={LearningApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterComponent;
