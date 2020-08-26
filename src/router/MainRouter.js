import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "router/routes";

import LandingPage from "pages/LandingPage/LandingPage";
import LearningApp from "router/LearningApp";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Route exact path={routes.home} component={LandingPage} />
      <Route path={routes.app} component={LearningApp} />
    </BrowserRouter>
  );
};

export default RouterComponent;
