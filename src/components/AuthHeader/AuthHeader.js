import React from "react";
import { MainWrapper, AuthType, ActiveAuth } from "./AuthHeader.style";

const AuthHeader = ({ authType, setAuthType }) => {
  return (
    <MainWrapper>
      <AuthType
        active={authType === "login"}
        onClick={() => setAuthType("login")}
      >
        Logowanie
      </AuthType>
      <AuthType
        active={authType === "register"}
        onClick={() => setAuthType("register")}
      >
        Rejestracja
      </AuthType>

      <ActiveAuth authType={authType} />
    </MainWrapper>
  );
};

export default AuthHeader;
