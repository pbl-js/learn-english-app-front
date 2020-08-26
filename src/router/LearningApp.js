import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "router/routes";

import NavigationLayout from "layouts/Navigation/NavigationLayout";
import Topics from "pages/Topics/Topics";
import Dojo from "pages/Dojo/Dojo";
import Collection from "pages/Collection/Collection";
import Profile from "pages/Profile/Profile";

const LearningApp = () => {
  return (
    <NavigationLayout>
      <Route exact path={routes.app} component={Topics} />
      <Route path={routes.dojo} component={Dojo} />
      <Route exact path={routes.collection} component={Collection} />
      <Route path={routes.profile} component={Profile} />
    </NavigationLayout>
  );
};

export default LearningApp;
