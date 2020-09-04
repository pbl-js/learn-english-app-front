import React, { useState } from "react";
import Link from "react-router-dom";

import { GradientWrapper, ModalWrapper, Form } from "./Auth.style";
import AuthHeader from "components/AuthHeader/AuthHeader";
import Register from "components/Register/Register";
import Login from "components/Login/Login";

const Auth = () => {
  const [authType, setAuthType] = useState("login");

  return (
    <GradientWrapper color="orange">
      <ModalWrapper>
        <AuthHeader authType={authType} setAuthType={setAuthType} />

        <Form>{authType === "register" ? <Register /> : <Login />}</Form>
      </ModalWrapper>
    </GradientWrapper>
  );
};

export default Auth;
