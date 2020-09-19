import React from "react";
import { MainWrapper, Title, TotalWords } from "./AppHeader.style";
import Timer from "components/Timer/Timer";
import Pause from "components/Pause/Pause";

const AppHeader = ({ visable }) => {
  return (
    <MainWrapper visable={visable}>
      {visable ? <TotalWords>312 Words</TotalWords> : <Pause />}
      <Title>topics</Title>
      <Timer />
    </MainWrapper>
  );
};

export default AppHeader;
