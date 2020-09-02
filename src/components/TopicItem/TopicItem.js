import React from "react";

import { LinkWrapper } from "./TopicItem.style";

const TopicItem = ({ to, title, color }) => {
  return (
    <LinkWrapper to={to} color={color}>
      {title}
    </LinkWrapper>
  );
};

export default TopicItem;
