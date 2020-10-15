import styled from "styled-components";
import { breakPoints } from "theme/theme";
import { mediumText } from "theme/mixins";
import WordImage from "components/WordImage/WordImage";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 30px;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media ${breakPoints.tablet} {
    grid-gap: 50px;
  }
`;

export const WordCard = styled(WordImage)`
  padding: 70px 70px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  max-width: 500px;
  height: 100%;
  grid-template-rows: 1fr auto;
  img {
    height: 100%;
    width: 100%;
  }
  p {
    margin-top: auto;
  }
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  ${mediumText};

  button {
    padding: 25px;
    border-radius: 1000px;
    border: 2px solid white;
    background-color: transparent;
    cursor: pointer;

    svg {
      width: 25px;
      height: 25px;
      fill: white;
    }
  }

  @media ${breakPoints.tablet} {
    button {
      padding: 30px;

      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
