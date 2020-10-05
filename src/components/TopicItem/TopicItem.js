import React from "react";
import { useToggle } from "hooks/useToggle";

import {
  MainWrapper,
  LinkWrapper,
  LockIcon,
  ProgressWraper,
  InfoIcon,
} from "./TopicItem.style";
import ProgressStatus from "components/ProgressStatus/ProgressStatus";
import ProgressIcon from "components/ProgressIcon/ProgressIcon";
import SlideInModal from "layouts/SlideInModal/SlideInModal";
import TopicDetailsModal from "components/TopicDetailsModal/TopicDetailsModal";

const statusType = (progress) => {
  const status = progress.status;

  if (status === "locked") {
    return <LockIcon />;
  } else if (status === "normal") {
    return null;
  } else if (status === "learning") {
    return <ProgressStatus progressData={progress} />;
  } else if (status === "mastering") {
    return <ProgressStatus progressData={progress} />;
  } else if (status === "complete") {
    return <ProgressIcon complete={1} />;
  }
};

const TopicItem = ({ to, color, topicItem }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const { img, title, progress } = topicItem;
  const { status, learningProgress, masteringProgress } = progress;

  return (
    <MainWrapper>
      <LinkWrapper
        to={to}
        color={color}
        img={img}
        locked={status === "locked" ? 1 : 0}
      >
        {title}

        <ProgressWraper>{statusType(progress)}</ProgressWraper>
      </LinkWrapper>

      {status !== "locked" ? <InfoIcon onClick={() => toggleOpen()} /> : null}

      <SlideInModal isOpen={isOpen}>
        <TopicDetailsModal
          closeModal={toggleOpen}
          color={color}
          title={title}
          img={img}
          topicItem={topicItem}
        />
      </SlideInModal>
    </MainWrapper>
  );
};

export default TopicItem;
