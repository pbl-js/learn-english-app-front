import React from "react";
import styled from "styled-components";
import { flexColumnCenter } from "theme/mixins";
import { fontSize, fontWeight } from "theme/theme";

const MainWrapper = styled.div`
  ${flexColumnCenter};
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 1000px;
  color: ${({ color }) => color};
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.semiBold};
`;

const WordPart = React.forwardRef(({ name, color }, ref) => {
  return (
    <MainWrapper ref={ref} color={color}>
      {name}
    </MainWrapper>
  );
});

export default WordPart;
