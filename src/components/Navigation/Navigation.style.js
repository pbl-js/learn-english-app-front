import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, fontSize } from "theme/theme";
import breakPoints from "theme/breakPoints";

export const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  padding: 25px;
  background-color: ${colors.purplePrimary};

  @media ${breakPoints.tablet} {
    flex-direction: column;
    width: 150px;
    height: 100vh;
    top: 0;
  }
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;

  @media ${breakPoints.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-gap: 5px;
  font-size: ${fontSize.xxs};
  fill: ${colors.purpleSecondary};
  color: ${colors.purpleSecondary};
  text-decoration: none;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: ${fontSize.xxxs};
    grid-gap: 10px;
  }

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
    width: 30px;
    height: 30px;

    @media ${breakPoints.tablet} {
      width: 40px;
      height: 40px;
    }
  }

  :hover {
    color: ${colors.purpleTertiary};
    fill: ${colors.purpleTertiary};
  }
`;

export const StyledLogo = styled(Link)`
  display: none;
  fill: white;
  margin-bottom: 10vh;

  svg {
    height: 50px;
    width: 50px;
  }

  @media ${breakPoints.tablet} {
    display: block;
  }
`;

export const StyledLogout = styled(Link)`
  display: none;
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

  @media ${breakPoints.tablet} {
    display: block;
  }
`;
