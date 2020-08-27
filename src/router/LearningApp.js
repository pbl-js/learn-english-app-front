import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import routes from "router/routes";

import BackgroundContextProvider from "context/BackgroundContext";

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

const onExit = (node) => {
  gsap.to(node, {
    duration: 0.5,
    opacity: 0,
  });
};

const onEnter = (node) => {
  gsap.fromTo(
    node,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.5,
      duration: 0.5,
    }
  );
};

const LearningApp = () => {
  return (
    <BackgroundContextProvider>
      <NavigationLayout>
        {routesList.map(({ path, name, color, Component }) => (
          <Route key={name} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                unmountOnExit
                onExit={onExit}
                onEnter={onEnter}
              >
                <GradientBackground color={color} index={1}>
                  <Component />
                </GradientBackground>
              </CSSTransition>
            )}
          </Route>
        ))}
      </NavigationLayout>
    </BackgroundContextProvider>
  );
};

export default LearningApp;
