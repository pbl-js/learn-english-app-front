import React from "react";
import styled from "styled-components";
import { flexColumnCenter } from "theme/mixins";

const MainWrapper = styled.div`
  ${flexColumnCenter};
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 1000px;
`;

const WordPart = ({ name }) => {
  return <MainWrapper>{name}</MainWrapper>;
};

export default WordPart;
