import styled from "styled-components";
import { colors, fontSize, fontWeight } from "theme/theme";
import { flexRowCenter } from "theme/mixins";

export const MainWrapper = styled.header`
  position: absolute;
  ${flexRowCenter};
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${colors.purpleAuthLight};
`;

export const AuthType = styled.div`
  width: 50%;
  height: 100%;
  line-height: 70px;
  text-align: center;
  cursor: pointer;
  font-size: ${fontSize.xs};
  font-weight: ${({ active }) =>
    active ? fontWeight.semiBold : fontWeight.light};
`;

export const ActiveAuth = styled.div`
  position: absolute;
  bottom: 0;
  left: ${({ authType }) => (authType === "register" ? "50%" : 0)};
  transition: left 0.15s;
  width: 50%;
  height: 3px;
  background-color: ${colors.purpleMenu};
`;
