import React, { useState, useEffect } from "react";
import { useSpeakContext } from "context/SpeakContext";

import {
  MainWrapper,
  WordIcon,
  InnerWrapper,
  ProgressWrapper,
  MenuButton,
} from "./CollectionWordItem.style";
import ProgressBar from "components/ProgressBar/ProgressBar";
import { ReactComponent as MenuIcon } from "assets/menuDots.svg";

const CollectionWordItem = ({ title, img, progress }) => {
  const unseen = progress.status === "unseen";
  const { speakText } = useSpeakContext();

  return (
    <MainWrapper>
      <WordIcon src={img} unseen={unseen} />

      <InnerWrapper unseen={unseen} onClick={() => speakText(title.eng)}>
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

      <MenuButton>
        <MenuIcon />
      </MenuButton>
    </MainWrapper>
  );
};

export default CollectionWordItem;
