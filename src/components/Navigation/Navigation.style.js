import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, fontSize } from "theme/theme";

export const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 150px;
  height: 100vh;
  padding: 25px;
  background-color: ${colors.purplePrimary};
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-gap: 10px;
  font-size: ${fontSize.xxs};
  fill: ${colors.purpleSecondary};
  color: ${colors.purpleSecondary};
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: white;

    :hover {
      color: white;
    }

    svg {
      fill: ${({ color }) => {
        switch (color) {
          case "orange":
            return colors.orangeMenu;
          case "blue":
            return colors.blueMenu;
          case "green":
            return colors.greenMenu;
          case "purple":
            return colors.purpleMenu;
          default:
            return colors.purpleMenu;
        }
      }};
    }
  }

  svg {
    width: 40px;
    height: 40px;
  }

  :hover {
    color: ${colors.purpleTertiary};
    fill: ${colors.purpleTertiary};
  }
`;

export const StyledLogo = styled(Link)`
  fill: white;
  margin-bottom: 10vh;

  svg {
    height: 50px;
    width: 50px;
  }
`;

export const StyledLogout = styled(Link)`
  margin-top: auto;
  fill: ${colors.purpleSecondary};
  transform: rotate(180deg);

  :hover {
    fill: ${colors.purpleTertiary};
  }

  svg {
    height: 40px;
    width: 40px;
  }
`;
