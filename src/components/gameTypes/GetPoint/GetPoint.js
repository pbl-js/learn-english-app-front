import React, { useLayoutEffect, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import { colors } from "theme/theme";
import { ReactComponent as CorrectIcon } from "assets/correct.svg";
import WordImage from "components/WordImage/WordImage";

const Correct = styled(CorrectIcon)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px;
  width: 150px;
  height: 150px;
  border-radius: 1000px;
  background-color: white;

  path {
    fill: ${colors.greenMenu};
  }
`;

const GetPoint = ({ wordItem }) => {
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
      });
  }, []);

  return (
    <>
      <Correct ref={(el) => (correctRef = el)} />
      <WordImage ref={(el) => (wordRef = el)}>
        <img src={wordItem.img} />
        {wordItem.eng}
      </WordImage>
    </>
  );
};

export default GetPoint;
