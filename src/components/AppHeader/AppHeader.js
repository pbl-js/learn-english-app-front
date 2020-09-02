import React from "react";
import { MainWrapper, Title, Timer, TotalWords } from "./AppHeader.style";
import { ReactComponent as Clock } from "assets/timer.svg";

const AppHeader = ({ visable }) => {
  return (
    <MainWrapper visable={visable}>
      <TotalWords>312 Words</TotalWords>
      <Title>topics</Title>
      <Timer>
        04:59 <Clock />
      </Timer>
    </MainWrapper>
  );
};

export default AppHeader;
