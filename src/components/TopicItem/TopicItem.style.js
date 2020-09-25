import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontWeight, fontSize, breakPoints } from "theme/theme";
import { ReactComponent as Lock } from "assets/lock.svg";

export const LinkWrapper = styled(Link)`
  pointer-events: ${({ locked }) => (locked ? "none" : "auto")};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 112px;
  padding: 25px;
  border-radius: 10px;
  background-color: red;
  text-decoration: none;
  color: white;
  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.xxs};
  background-color: ${({ color }) => color};

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-image: url(${({ img }) => img});
    background-position: bottom 10px right 10px;
    background-size: 55px 55px;
    background-repeat: no-repeat;
    opacity: 0.3;

    @media ${breakPoints.tablet} {
      background-size: 75px 75px;
    }
  }

  &::after {
    content: "";
    display: ${({ locked }) => (locked ? "block" : "none")};
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    border-radius: 10px;
    opacity: 0.5;
  }

  @media ${breakPoints.tablet} {
    width: 200px;
    height: 150px;
    font-size: ${fontSize.s};
  }
`;

export const LockIcon = styled(Lock)`
  position: absolute;
  bottom: 25px;
  left: 25px;
  z-index: 1;
  width: 15px;
  height: 15px;
  margin-top: auto;
  fill: white;

  @media ${breakPoints.tablet} {
    width: 25px;
    height: 25px;
  }
`;

export const ProgressWraper = styled.div`
  display: flex;
  align-items: center;
  height: 7px;
  width: 50%;
  margin-top: auto;

  @media ${breakPoints.tablet} {
    height: 10px;
  }
`;
