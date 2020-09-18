import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "theme/theme";
import { mediumUppercaseText } from "theme/mixins";
import { ReactComponent as Arrow } from "assets/arrow.svg";

const MainWrapper = styled.article`
  width: 100%;

  header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 25px 30px;
    background-color: ${colors.greenMenu};
    color: white;
    ${mediumUppercaseText}
    border-radius: 1000px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    svg {
      height: 25px;
      width: 25px;
      fill: white;
      margin-left: auto;
    }
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  padding: 50px;
`;

const CollectionItem = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <MainWrapper>
      <header onClick={toggleOpen}>
        {title} <Arrow />
      </header>

      {open && <InnerWrapper>{children}</InnerWrapper>}
    </MainWrapper>
  );
};

export default CollectionItem;
