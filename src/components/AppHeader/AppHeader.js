import React from "react";
import { MainWrapper, Title, TotalWords } from "./AppHeader.style";
import Timer from "components/Timer/Timer";

const AppHeader = ({ visable }) => {
  return (
    <MainWrapper visable={visable}>
      <TotalWords>312 Words</TotalWords>
      <Title>topics</Title>
      <Timer />
    </MainWrapper>
  );
};

export default AppHeader;
