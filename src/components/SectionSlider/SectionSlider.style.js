import styled from "styled-components";
import { mediumUppercaseText } from "theme/mixins";

export const MainWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  ${mediumUppercaseText}
  height: 40px;
`;

export const TopicsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 150px;
`;

export const InnerTopicsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  a:last-child {
    margin-right: 0;
  }

  a {
    margin-right: 15px;
  }
`;
