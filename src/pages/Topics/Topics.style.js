import styled from "styled-components";
import { bigNormalText, mediumUppercaseText, bigButton } from "theme/mixins";

export const MainWrapper = styled.div`
  min-height: 3140px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 70px;
`;

export const LastTopicWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  height: 260px;
  margin: 50px 0;

  h1 {
    ${mediumUppercaseText}
  }

  h2 {
    ${bigNormalText}
  }

  div {
    height: 15px;
    width: 200px;
  }

  button {
    ${bigButton}
    margin-right: auto;
  }
`;

export const SectionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  width: 100%;
`;
