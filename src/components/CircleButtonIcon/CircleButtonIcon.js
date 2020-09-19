import React from "react";
import styled from "styled-components";
import { flexColumnCenter, normalText } from "theme/mixins";
import { colors } from "theme/theme";

const MainWrapper = styled.div`
  ${flexColumnCenter}
  color: ${colors.purpleModalMedium};
  ${normalText}

  div {
    ${flexColumnCenter}
    padding: 20px;
    border-radius: 1000px;
    margin-bottom: 15px;
    background-color: ${({ light }) =>
      light ? colors.purpleMenu : colors.purpleModalMedium};
    cursor: pointer;

    svg {
      height: 20px;
      width: 20px;
      fill: white;
    }
  }
`;

const CircleButtonIcon = ({ title, children, light, onClick }) => {
  return (
    <MainWrapper light={light}>
      <div onClick={onClick}>{children}</div>
      {title}
    </MainWrapper>
  );
};

export default CircleButtonIcon;
