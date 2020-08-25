import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "routes/routes";

import NavigationLayout from "layouts/Navigation/NavigationLayout";
import Topics from "pages/Topics/Topics";
import Dojo from "pages/Dojo/Dojo";
import Collection from "pages/Collection/Collection";
import Profile from "pages/Profile/Profile";

const LearningApp = () => {
  return (
    <NavigationLayout>
      <Switch>
        <Route exact path={routes.app} component={Topics} />
        <Route path={routes.dojo} component={Dojo} />
        <Route exact path={routes.collection} component={Collection} />
        <Route path={routes.profile} component={Profile} />
      </Switch>
    </NavigationLayout>
  );
};

export default LearningApp;
