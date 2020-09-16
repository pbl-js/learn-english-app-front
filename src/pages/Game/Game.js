import React, { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "router/routes";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Game = (props) => {
  return (
    <MainWrapper>
      <h1>Game</h1>
      <h1>Game</h1>
      <Link to={routes.topics}>Ognia</Link>
    </MainWrapper>
  );
};

export default memo(Game);
