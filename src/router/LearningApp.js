import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "router/routes";

import BackgroundContextProvider from "context/BackgroundContext";
import FadeInOutLayout from "layouts/FadeInOut/FadeInOutLayout";
import GradientLayout from "layouts/GradientLayout/GradientLayout";
import PageLayout from "layouts/PageLayout/PageLayout";

import NavigationLayout from "layouts/NavigationLayout/NavigationLayout";
import Topics from "pages/Topics/Topics";
import Dojo from "pages/Dojo/Dojo";
import Collection from "pages/Collection/Collection";
import Profile from "pages/Profile/Profile";
import Game from "pages/Game/Game";
import { TimerProvider } from "context/TimerContext";

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
    path: `${routes.game}/:handle`,
    name: "Game",
    color: "orange",
    Component: Game,
  },
];

const LearningApp = () => {
  return (
    <BackgroundContextProvider>
      <TimerProvider>
        <GradientLayout>
          <NavigationLayout>
            <Route exact path="/app">
              <Redirect to="/app/topics" />
            </Route>

            {routesList.map(({ path, name, color, Component }) => (
              <Route key={name} path={path} exact>
                {(props) => (
                  <FadeInOutLayout match={props.match} color={color}>
                    <PageLayout isTopics={name === "Topics"}>
                      <Component {...props} />
                    </PageLayout>
                  </FadeInOutLayout>
                )}
              </Route>
            ))}
          </NavigationLayout>
        </GradientLayout>
      </TimerProvider>
    </BackgroundContextProvider>
  );
};

export default LearningApp;
