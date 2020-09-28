import styled from "styled-components";
import WordImage from "components/WordImage/WordImage";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  justify-items: center;
  align-items: center;
  padding-top: 70px;
  height: 100%;
  max-height: 600px;
  width: 100%;
  overflow: hidden;
`;

export const WordCard = styled(WordImage)`
  padding: 70px 50px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  padding: 30px 0;

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
`;
