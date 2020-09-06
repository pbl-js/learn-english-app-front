import React from "react";
import GlobalStyle from "theme/GlobalStyle";

import { ApolloProvider } from "@apollo/client";
import client from "apollo/client";

import Router from "router/MainRouter";
import { AuthProvider } from "context/AuthContext";

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <GlobalStyle />
        <Router />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
