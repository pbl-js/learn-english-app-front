import styled from "styled-components";
import { fontSize, fontWeight } from "theme/theme";
import { flexRowCenter } from "theme/mixins";

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
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${({ partsCount }) => partsCount}, auto);
  grid-gap: 20px;
  width: 100%;
  height: 100%;
`;

export const WordToFillWrapper = styled.div`
  max-width: 400px;
  height: 60px;
  border: 2px solid white;
  border-radius: 1000px;
  width: 100%;
  ${flexRowCenter};
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.semiBold};
  letter-spacing: 5px;
`;
