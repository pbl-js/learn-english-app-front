import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import routes from "routes/routes";

import LandingPage from "pages/LandingPage/LandingPage";
import LearningApp from "pages/LearningApp/LearningApp";

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
