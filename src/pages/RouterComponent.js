import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import routes from "routes/routes";

import LandingPage from "pages/LandingPage/LandingPage";
import LearningApp from "pages/LearningApp/LearningApp";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={routes.home}>LandingPage</Link>
          </li>

          <li>
            <Link to={routes.app}>App</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={routes.home} component={LandingPage} />
        <Route path={routes.app} component={LearningApp} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterComponent;
