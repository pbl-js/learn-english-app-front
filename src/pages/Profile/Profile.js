import React, { memo } from "react";
import styled from "styled-components";
import { flexColumnCenter } from "theme/mixins";

const MainWrapper = styled.div`
  ${flexColumnCenter}
  width: 100%;
  height: 100%;
`;

const Profile = () => {
  console.log("profile");
  return (
    <MainWrapper>
      <h1>Profile</h1>
      <h1>Profile</h1>
    </MainWrapper>
  );
};

export default memo(Profile);
