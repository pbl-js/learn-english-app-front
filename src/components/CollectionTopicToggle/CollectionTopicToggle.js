import React, { useState } from "react";
import styled from "styled-components";
import { colors, breakPoints } from "theme/theme";
import { mediumUppercaseText } from "theme/mixins";
import { ReactComponent as Arrow } from "assets/arrow.svg";

const MainWrapper = styled.article`
  width: 100%;

  header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
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
      transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
    }
  }

  @media ${breakPoints.mobileL} {
    header {
      padding: 25px 30px;
    }
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding: 20px 10px;

  @media ${breakPoints.mobileM} {
    padding: 30px;
    grid-gap: 30px;
  }

  @media ${breakPoints.mobileL} {
    padding: 50px;
  }
`;

const CollectionItem = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <MainWrapper open={open}>
      <header onClick={toggleOpen}>
        {title} <Arrow />
      </header>

      {open && <InnerWrapper>{children}</InnerWrapper>}
    </MainWrapper>
  );
};

export default CollectionItem;
