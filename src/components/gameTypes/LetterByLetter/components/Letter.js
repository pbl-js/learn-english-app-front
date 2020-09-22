import React from "react";
import styled from "styled-components";

const Disable = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 3px solid white;
`;

const Letter = ({ show, children }) => {
  if (show) {
    return <div>{children}</div>;
  } else {
    return <Disable />;
  }
};

export default Letter;
