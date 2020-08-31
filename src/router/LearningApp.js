import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "router/routes";

import BackgroundContextProvider from "context/BackgroundContext";
import FadeInOutLayout from "layouts/FadeInOut/FadeInOutLayout";
import GradientLayout from "layouts/GradientLayout/GradientLayout";

import GradientBackground from "components/GradientBackground/GradientBackground";
import NavigationLayout from "layouts/Navigation/NavigationLayout";
import Topics from "pages/Topics/Topics";
import Dojo from "pages/Dojo/Dojo";
import Collection from "pages/Collection/Collection";
import Profile from "pages/Profile/Profile";

const routesList = [
  { path: routes.topics, name: "Topics", color: "orange", Component: Topics },
  { path: routes.dojo, name: "Dojo", color: "blue", Component: Dojo },
  {
    path: routes.collection,
    name: "Collection",
    color: "green",
    Component: Collection,
  },
  {
    path: routes.profile,
    name: "Profile",
    color: "purple",
    Component: Profile,
  },
];

const LearningApp = () => {
  return (
    <BackgroundContextProvider>
      <GradientLayout>
        <NavigationLayout>
          <Route exact path="/app">
            <Redirect to="/app/topics" />
          </Route>
          {routesList.map(({ path, name, color, Component }) => (
            <Route key={name} path={path} exact>
              {({ match }) => (
                <FadeInOutLayout match={match}>
                  <GradientBackground color={color} index={1}>
                    <Component />
                  </GradientBackground>
                </FadeInOutLayout>
              )}
            </Route>
          ))}
        </NavigationLayout>
      </GradientLayout>
    </BackgroundContextProvider>
  );
};

export default LearningApp;
