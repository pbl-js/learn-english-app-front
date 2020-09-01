import React from "react";
import GlobalStyle from "theme/GlobalStyle";

import { ApolloProvider } from "@apollo/client";
import client from "apollo/client";

import Router from "router/MainRouter";

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router />
    </ApolloProvider>
  );
}

export default App;
