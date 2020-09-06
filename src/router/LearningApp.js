import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "router/routes";

import BackgroundContextProvider from "context/BackgroundContext";
import FadeInOutLayout from "layouts/FadeInOut/FadeInOutLayout";
import GradientLayout from "layouts/GradientLayout/GradientLayout";

import AppPageLayout from "layouts/AppPageLayout/AppPageLayout";
import NavigationLayout from "layouts/AppLayout/AppLayout";
import Topics from "pages/Topics/Topics";
import Dojo from "pages/Dojo/Dojo";
import Collection from "pages/Collection/Collection";
import Profile from "pages/Profile/Profile";
import Game from "pages/Game/Game";

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
  {
    path: routes.game,
    name: "Game",
    color: "green",
    Component: Game,
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
                  <AppPageLayout color={color}>
                    <Component />
                  </AppPageLayout>
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
