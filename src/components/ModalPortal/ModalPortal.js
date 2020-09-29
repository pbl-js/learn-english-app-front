import React from "react";
import ReactDom from "react-dom";

const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <>{children}</>,
    document.getElementById("portal")
  );
};

export default Modal;
