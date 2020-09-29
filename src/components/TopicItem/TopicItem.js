import React from "react";

import {
  LinkWrapper,
  LockIcon,
  ProgressWraper,
  InfoIcon,
} from "./TopicItem.style";
import ProgressStatus from "components/ProgressStatus/ProgressStatus";
import ProgressIcon from "components/ProgressIcon/ProgressIcon";

const TopicItem = ({
  to,
  title,
  color,
  img,
  status,
  learningProgress,
  masteringProgress,
}) => {
  const statusType = () => {
    if (status === "locked") {
      return <LockIcon />;
    } else if (status === "normal") {
      return null;
    } else if (status === "learning") {
      return <ProgressStatus progress={learningProgress} />;
    } else if (status === "mastering") {
      return <ProgressStatus progress={masteringProgress} mastering={1} />;
    } else if (status === "complete") {
      return <ProgressIcon complete={1} />;
    }
  };

  return (
    <LinkWrapper
      to={to}
      color={color}
      img={img}
      locked={status === "locked" ? 1 : 0}
    >
      {title}

      <ProgressWraper>{statusType()}</ProgressWraper>
      {status !== "locked" ? (
        <InfoIcon onClick={(e) => e.preventDefault} />
      ) : null}
    </LinkWrapper>
  );
};

export default TopicItem;
