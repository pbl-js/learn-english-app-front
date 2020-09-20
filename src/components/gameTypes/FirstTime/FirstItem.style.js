import styled, { css } from "styled-components";
import { bigNormalText } from "theme/mixins";
import { ReactComponent as LearnIcon } from "assets/learn.svg";
import { ReactComponent as HideIcon } from "assets/hide.svg";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75%;
`;

export const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
  ${bigNormalText}

  img {
    margin-bottom: 20px;
  }
`;

const icon = css`
  width: 120px;
  height: 120px;
  padding: 30px;
  border-radius: 1000px;
  background-color: rgba(0, 0, 0, 0.3);
  fill: white;
`;

export const Hide = styled(HideIcon)`
  ${icon}
`;

export const Learn = styled(LearnIcon)`
  ${icon}
`;
