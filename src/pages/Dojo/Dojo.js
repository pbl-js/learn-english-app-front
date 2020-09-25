import React, { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { flexColumnCenter } from "theme/mixins";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexColumnCenter};
`;

const Dojo = (props) => {
  return (
    <MainWrapper>
      <h1>Dojo</h1>
      <h1>Dojo</h1>
      <Link to="/app/game">dawaj</Link>
    </MainWrapper>
  );
};

export default memo(Dojo);
