import React, { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { bigNormalText, flexColumnCenter, bigButton } from "theme/mixins";
import { ReactComponent as LearningImage } from "assets/learningColorImage.svg";
import { colors, breakPoints, fontWeight, layout } from "theme/theme";

const MainWrapper = styled.div`
  ${flexColumnCenter};
  width: 100%;
  height: 100%;
  padding: ${layout.mainPadding.tablet + "px"};

  @media ${breakPoints.tablet} {
    padding: ${layout.mainPadding.desktop + "px"};
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  max-width: 650px;
  text-align: center;
  font-weight: ${fontWeight.medium};

  & > h1 {
    ${bigNormalText};
  }

  & > p {
    opacity: 0.5;
  }

  & > a {
    ${bigButton}
  }
`;

const StyledImage = styled(LearningImage)`
  width: 100px;
  height: 100px;

  @media ${breakPoints.mobileL} {
    width: 150px;
    height: 150px;
  }

  @media ${breakPoints.tablet} {
    width: 250px;
    height: 250px;
  }
`;

const Dojo = (props) => {
  return (
    <MainWrapper>
      <InnerWrapper color={colors.blueMenu}>
        <StyledImage />

        <h1>Nigdy nie zapominaj słówek!</h1>

        <p>
          Powtarzaj słówka według optymalnego algorytmu nauczania. Tryb Dojo
          prezentuje ci odpowiednie słówko w odpowiednim czasie!
        </p>

        <Link to="/app/game">Zaczynamy</Link>
      </InnerWrapper>
    </MainWrapper>
  );
};

export default memo(Dojo);
