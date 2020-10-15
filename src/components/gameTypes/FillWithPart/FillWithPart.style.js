import styled from "styled-components";
import { breakPoints, fontSize, fontWeight } from "theme/theme";
import { flexRowCenter, whiteFilter } from "theme/mixins";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr auto;
  align-items: center;
  justify-items: center;
  grid-gap: 30px;
  height: 100%;
  width: 100%;
`;

export const PartsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const WordToFillWrapper = styled.div`
  max-width: 400px;
  height: 50px;
  border: 2px solid white;
  border-radius: 1000px;
  width: 100%;
  ${flexRowCenter};
  font-size: ${fontSize.x};
  font-weight: ${fontWeight.semiBold};

  @media ${breakPoints.tablet} {
    height: 60px;
    font-size: ${fontSize.m};
  }
`;

export const BlankLetters = styled.div`
  margin-left: 5px;
  letter-spacing: 5px;
`;

export const StyledWordImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  ${whiteFilter};
`;
