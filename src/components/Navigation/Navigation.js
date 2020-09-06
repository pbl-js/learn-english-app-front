import React, { useContext } from "react";
import routes from "router/routes";
import { AuthContext } from "context/AuthContext";

import { ReactComponent as Star } from "assets/star.svg";
import { ReactComponent as Grid } from "assets/grid.svg";
import { ReactComponent as Book } from "assets/book.svg";
import { ReactComponent as User } from "assets/user.svg";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Logout } from "assets/logout.svg";
import {
  StyledNav,
  InnerWrapper,
  StyledNavLink,
  StyledLogo,
  StyledLogout,
} from "./Navigation.style";

const Navigation = ({ visable }) => {
  const { logout } = useContext(AuthContext);

  return (
    <StyledNav visable={visable}>
      <StyledLogo to="/">
        <Logo />
      </StyledLogo>

      <InnerWrapper>
        <StyledNavLink color="orange" exact to={routes.topics}>
          <Grid />
          <p>Topics</p>
        </StyledNavLink>

        <StyledNavLink color="blue" to={routes.dojo}>
          <Star />
          <p>Dojo</p>
        </StyledNavLink>

        <StyledNavLink color="green" to={routes.collection}>
          <Book />
          <p>Collection</p>
        </StyledNavLink>

        <StyledNavLink color="purple" to={routes.profile}>
          <User />
          <p>Profile</p>
        </StyledNavLink>
      </InnerWrapper>

      <StyledLogout to="/" onClick={() => logout()}>
        <Logout />
      </StyledLogout>
    </StyledNav>
  );
};

export default Navigation;
