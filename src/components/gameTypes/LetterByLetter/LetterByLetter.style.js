import styled from "styled-components";
import { flexColumnCenter } from "theme/mixins";
import { breakPoints, fontSize } from "theme/theme";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  align-items: center;
  padding-top: 70px;
  height: 100%;
  max-height: 600px;
  width: 100%;
  overflow: hidden;
`;

export const WordToFill = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;

  div {
    width: 10px;
    margin: 0 5px;
    text-align: center;
    font-size: ${fontSize.l};
  }

  @media ${breakPoints.tablet} {
    div {
      width: 15px;
      font-size: ${fontSize.xl};
    }
  }
`;

export const LettersWrapper = styled.div`
  display: flex;
  max-width: 90%;

  @media ${breakPoints.tablet} {
    max-width: 500px;
  }
`;

export const LetterItem = styled.div`
  width: 50px;
  height: 65px;
  margin: 0 5px;
  border: 2px solid white;
  border-radius: 10px;
  text-transform: uppercase;
  ${flexColumnCenter};
  font-size: ${fontSize.l};
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  @media ${breakPoints.tablet} {
    font-size: ${fontSize.xl};
    border-radius: 14px;
    width: 60px;
    height: 80px;
    margin: 0 15px;
  }
`;
