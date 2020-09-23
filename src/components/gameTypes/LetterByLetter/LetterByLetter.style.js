import styled from "styled-components";
import { flexColumnCenter } from "theme/mixins";
import { fontSize } from "theme/theme";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-height: 600px;
  width: 100%;
  overflow: hidden;
`;

export const WordToFill = styled.div`
  display: flex;
  flex-direction: row;

  div {
    width: 15px;
    margin: 0 5px;
    text-align: center;
    font-size: ${fontSize.xl};
  }
`;

export const LettersWrapper = styled.div`
  display: flex;
  max-width: 500px;
`;

export const LetterItem = styled.div`
  width: 60px;
  height: 80px;
  margin: 0 15px;
  border: 3px solid white;
  border-radius: 14px;
  text-transform: uppercase;
  ${flexColumnCenter};
  font-size: ${fontSize.xl};
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
