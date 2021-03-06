import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "router/routes";

import { BackgroundProvider } from "context/BackgroundContext";
import { TimerProvider } from "context/TimerContext";
import { SpeakProvider } from "context/SpeakContext";
import FadeInOutLayout from "layouts/FadeInOut/FadeInOutLayout";
import GradientLayout from "layouts/GradientLayout/GradientLayout";

import NavigationLayout from "layouts/NavigationLayout/NavigationLayout";
import Topics from "pages/Topics/Topics";
import Dojo from "pages/Dojo/Dojo";
import Collection from "pages/Collection/Collection";
import Profile from "pages/Profile/Profile";
import Game from "pages/Game/Game";

const routesList = [
  { path: routes.topics, name: "Topics", Component: Topics },
  { path: routes.dojo, name: "Dojo", Component: Dojo },
  {
    path: routes.collection,
    name: "Collection",
    Component: Collection,
  },
  {
    path: routes.profile,
    name: "Profile",
    Component: Profile,
  },
  {
    path: `${routes.game}/:handle`,
    name: "Game",
    Component: Game,
  },
];

const LearningApp = () => {
  return (
    <BackgroundProvider>
      <TimerProvider>
        <SpeakProvider>
          <GradientLayout>
            <NavigationLayout>
              <Route exact path="/app">
                <Redirect to="/app/topics" />
              </Route>

              {routesList.map(({ path, name, Component }) => (
                <Route key={name} path={path} exact>
                  {(props) => (
                    <FadeInOutLayout match={props.match}>
                      <Component {...props} />
                    </FadeInOutLayout>
                  )}
                </Route>
              ))}
            </NavigationLayout>
          </GradientLayout>
        </SpeakProvider>
      </TimerProvider>
    </BackgroundProvider>
  );
};

export default LearningApp;
