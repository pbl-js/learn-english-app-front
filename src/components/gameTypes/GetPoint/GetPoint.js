import React, { useLayoutEffect, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import { colors } from "theme/theme";
import { ReactComponent as CompleteIcon } from "assets/correct.svg";
import { ReactComponent as FailIcon } from "assets/close.svg";
import WordImage from "components/WordImage/WordImage";

const Correct = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px;
  width: 150px;
  height: 150px;
  border-radius: 1000px;
  background-color: white;

  svg {
    fill: ${({ fail }) => (fail ? colors.red : colors.greenMenu)};
    width: 100%;
    height: 100%;
  }
`;

const GetPoint = ({ wordItem, onFinish, fail }) => {
  let correctRef = useRef(null);
  let wordRef = useRef(null);

  useLayoutEffect(() => {
    gsap.set([correctRef, wordRef], {
      scale: 0,
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.3 },
    });

    tl.to(correctRef, {
      scale: 1.1,
    })
      .to(correctRef, {
        scale: 1,
        duration: 0.1,
      })
      .to(correctRef, {
        scale: 10,
        autoAlpha: 0,
        delay: 0.3,
      })
      .to(wordRef, {
        scale: 1.1,
      })
      .to(wordRef, {
        scale: 1,
        duration: 0.1,
      })
      .to(wordRef, {
        autoAlpha: 0,
        y: 500,
        delay: 0.3,
        onComplete: () => onFinish(),
      });
  }, []);

  return (
    <>
      <Correct fail={fail} ref={(el) => (correctRef = el)}>
        {fail ? <FailIcon /> : <CompleteIcon />}
      </Correct>

      <WordImage ref={(el) => (wordRef = el)}>
        <img src={wordItem.img} />
        {wordItem.eng}
      </WordImage>
    </>
  );
};

export default GetPoint;
