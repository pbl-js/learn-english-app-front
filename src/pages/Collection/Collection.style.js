import styled from "styled-components";
import { defaultPaddingLayout } from "theme/mixins";

export const MainWrapper = styled.div`
  ${defaultPaddingLayout};
`;

export const TopicsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
`;
