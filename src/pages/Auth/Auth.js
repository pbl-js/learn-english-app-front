import React, { useState } from "react";
import Link from "react-router-dom";

import { GradientWrapper, ModalWrapper, InnerWrapper } from "./Auth.style";
import AuthHeader from "components/AuthHeader/AuthHeader";

const Auth = () => {
  const [authType, setAuthType] = useState("login");

  return (
    <GradientWrapper color="orange">
      <ModalWrapper>
        <AuthHeader authType={authType} setAuthType={setAuthType} />
        <InnerWrapper>ds</InnerWrapper>
      </ModalWrapper>
    </GradientWrapper>
  );
};

export default Auth;
