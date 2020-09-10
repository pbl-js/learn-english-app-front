import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontWeight, fontSize } from "theme/theme";
import { ReactComponent as Lock } from "assets/lock.svg";

export const LinkWrapper = styled(Link)`
  pointer-events: ${({ locked }) => (locked ? "none" : "auto")};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 150px;
  padding: 25px;
  border-radius: 10px;
  background-color: red;
  text-decoration: none;
  color: white;
  font-weight: ${fontWeight.medium};
  font-size: ${fontSize.s};
  /* background-color: ${({ color }) => {
    if (color === "orange") {
      return "#e67e22";
    } else if (color === "red") {
      return "#E64C3C";
    } else if (color === "cherry") {
      return "#BF382C";
    } else if (color === "purple1") {
      return "#9B59B6";
    } else if (color === "purple2") {
      return "#8D45AD";
    } else if (color === "blue1") {
      return "#2980BA";
    } else if (color === "blue2") {
      return "#3598DA";
    } else if (color === "green1") {
      return "#1EBB9C";
    } else if (color === "green2") {
      return "#159F86";
    } else if (color === "green3") {
      return "#29AE61";
    } else if (color === "green4") {
      return "#2CCC70";
    }
  }}; */
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
    background-size: 75px 75px;
    background-repeat: no-repeat;
    opacity: 0.3;
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
    opacity: 0.5;
  }
`;

export const LockIcon = styled(Lock)`
  position: absolute;
  bottom: 25px;
  left: 25px;
  z-index: 1;
  width: 25px;
  height: 25px;
  margin-top: auto;
  fill: white;
`;

export const ProgressWraper = styled.div`
  display: flex;
  align-items: center;
  height: 10px;
  width: 50%;
  margin-top: auto;
`;
