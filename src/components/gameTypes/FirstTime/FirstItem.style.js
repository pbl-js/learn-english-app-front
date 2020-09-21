import styled, { css } from "styled-components";
import { bigNormalText } from "theme/mixins";
import { ReactComponent as LearnIcon } from "assets/learn.svg";
import { ReactComponent as HideIcon } from "assets/hide.svg";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: auto;
  margin-top: 100px;
`;

export const Learn = styled(LearnIcon)`
  ${icon}
  margin-top: auto;
  margin-bottom: 100px;
`;
