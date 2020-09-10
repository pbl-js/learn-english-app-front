import React, { memo } from "react";
import { Link } from "react-router-dom";

const Dojo = (props) => {
  console.log("Dojo");
  return (
    <>
      <h1>Dojo</h1>
      <h1>Dojo</h1>
      <Link to="/app/game">dawaj</Link>
    </>
  );
};

export default memo(Dojo);
