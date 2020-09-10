import React, { memo } from "react";

const Collection = () => {
  console.log("Collection");
  return (
    <div style={{ height: "200vh" }}>
      <h1>Collection</h1>
      <h1>Collection</h1>
    </div>
  );
};

export default memo(Collection);
