import React from "react";
import styled from "styled-components";
import { colors } from "theme/theme";
import { ReactComponent as Star } from "assets/progressStar.svg";
import { ReactComponent as Eye } from "assets/eye.svg";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 150%;

  svg {
    height: 100%;
    fill: ${({ complete }) => (complete ? colors.yellow : "rgba(0,0,0,0.3)")};
  }
`;

const ProgressIcon = ({ mastering, complete }) => {
  return (
    <MainWrapper complete={complete}>
      {mastering || complete ? <Star /> : <Eye />}
    </MainWrapper>
  );
};

export default ProgressIcon;
