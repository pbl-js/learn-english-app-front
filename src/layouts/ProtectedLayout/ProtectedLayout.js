import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "context/AuthContext";

const ProtectedLayout = ({ children }) => {
  const { user } = useContext(AuthContext);

  return <>{!user ? <Redirect to="/" /> : children}</>;
};

export default ProtectedLayout;
