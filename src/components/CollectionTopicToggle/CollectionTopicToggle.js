import React, { useState } from "react";
import styled from "styled-components";
import { colors, breakPoints } from "theme/theme";
import { mediumUppercaseText } from "theme/mixins";

import { ReactComponent as Arrow } from "assets/arrow.svg";
import ListWrapper from "components/ListWrapper/ListWrapper";

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

      {open && <ListWrapper withPadding={1}>{children}</ListWrapper>}
    </MainWrapper>
  );
};

export default CollectionItem;
