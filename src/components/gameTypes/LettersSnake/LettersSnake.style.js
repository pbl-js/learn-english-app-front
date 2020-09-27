import styled from "styled-components";
import { flexColumnCenter } from "theme/mixins";
import { fontSize, fontWeight } from "theme/theme";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  grid-gap: 30px;
  justify-items: center;
  align-items: center;
  padding-top: 70px;
  height: 100%;
  max-height: 600px;
  width: 100%;
`;

export const LettersWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(
    ${({ lettersRowCount }) => lettersRowCount},
    auto
  );
  grid-template-rows: repeat(${({ lettersRowCount }) => lettersRowCount}, auto);
  display: grid;
`;

export const LetterItem = styled.div`
  ${flexColumnCenter};
  width: 70px;
  height: 70px;
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.medium};
  border: 2px solid white;
  border-radius: 1000px;
`;

export const WordText = styled.p`
  font-size: ${fontSize.l};
  font-weight: ${fontWeight.medium};
`;
