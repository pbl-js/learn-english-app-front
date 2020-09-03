import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "router/routes";

import LandingPage from "pages/LandingPage/LandingPage";
import Auth from "pages/Auth/Auth";
import LearningApp from "router/LearningApp";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home}>
          <Redirect to="/auth" />
        </Route>
        <Route path={routes.auth} component={Auth} />
        <Route path={routes.app} component={LearningApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterComponent;
