import React from "react";
import styled from "styled-components";

import {
  MainWrapper,
  WordIcon,
  InnerWrapper,
  ProgressWrapper,
} from "./CollectionWordItem.style";
import ProgressBar from "components/ProgressBar/ProgressBar";

const CollectionWordItem = ({ title, img, progress }) => {
  const unseen = progress.status === "unseen";

  const showMoreInfo = () => {
    if (unseen) {
      return null;
    } else {
      return (
        <>
          <p>{title.pl}</p>
          <ProgressWrapper>
            <ProgressBar
              progress={
                progress.status === "mastering"
                  ? progress.masteringProgress
                  : progress.learningProgress
              }
              mastering={progress.status === "mastering" ? true : false}
            />
          </ProgressWrapper>
        </>
      );
    }
  };

  return (
    <MainWrapper>
      <WordIcon src={img} unseen={unseen} />

      <InnerWrapper unseen={unseen}>
        <h3>{title.eng}</h3>
        {unseen ? null : (
          <>
            <p>{title.pl}</p>
            <ProgressWrapper>
              <ProgressBar
                progress={
                  progress.status === "mastering"
                    ? progress.masteringProgress
                    : progress.learningProgress
                }
                mastering={progress.status === "mastering" ? true : false}
              />
            </ProgressWrapper>
          </>
        )}
      </InnerWrapper>
    </MainWrapper>
  );
};

export default CollectionWordItem;
