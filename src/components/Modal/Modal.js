import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import { colors } from "theme/theme";

const MainWrapper = styled.div`
  position: fixed;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Background = styled.span`
  z-index: 9999;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.purplePrimary};
  opacity: 0.2;
`;

const Modal = ({ children, closeModal }) => {
  return ReactDom.createPortal(
    <div>
      <Background onClick={closeModal} />
      <MainWrapper>{children}</MainWrapper>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
