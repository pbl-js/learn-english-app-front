import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import routes from "router/routes";

import { AuthContext } from "context/AuthContext";

import { GradientWrapper, ModalWrapper } from "./Auth.style";
import AuthHeader from "components/AuthHeader/AuthHeader";
import Register from "components/Register/Register";
import Login from "components/Login/Login";

const Auth = () => {
  const [authType, setAuthType] = useState("login");
  const { user } = useContext(AuthContext);

  if (user) {
    return <Redirect to={routes.app} />;
  } else {
    return (
      <GradientWrapper color="orange">
        <ModalWrapper>
          <AuthHeader authType={authType} setAuthType={setAuthType} />

          {authType === "register" ? <Register /> : <Login />}
        </ModalWrapper>
      </GradientWrapper>
    );
  }
};

export default Auth;
