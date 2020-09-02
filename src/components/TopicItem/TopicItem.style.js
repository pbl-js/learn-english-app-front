import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
  width: 200px;
  height: 150px;
  padding: 25px;
  border-radius: 10px;
  background-color: red;
  text-decoration: none;
  color: white;
  background-color: ${({ color }) => color};
`;
