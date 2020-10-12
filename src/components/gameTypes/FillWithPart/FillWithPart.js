import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import uuid from "react-uuid";
import { useBackgroundState } from "context/BackgroundContext";

import {
  MainWrapper,
  PartsWrapper,
  WordToFillWrapper,
} from "./FillWithPart.style";
import WordPart from "./WordPart";
import WordImage from "components/WordImage/WordImage";

gsap.registerPlugin(Draggable);

const genWordParts = (wordItem) => {
  let parts = [];

  for (let index = 0; index < wordItem.eng.length; index = index + 2) {
    const wordPart = {
      id: uuid(),
      text: wordItem.eng.slice(index, index + 2),
    };

    parts.push(wordPart);
  }

  return parts;
};

function onDrag(currentRefs) {
  // console.log(this);
  let i = currentRefs.length;

  while (--i > -1) {
    if (this.hitTest(currentRefs[i], "1%")) {
      const direction = this.getDirection(currentRefs[i]);
      console.log(direction);
      const isLeft = direction.includes("left");
      const isTop = direction.includes("up");

      const genMovement = () => {};

      gsap.to(currentRefs[i], {
        x: isLeft ? "+=10" : "-=10",
        y: isTop ? "+=10" : "-=10",
        duration: 0.1,
      });
    }
  }
}

const FillWithPart = ({ wordItem }) => {
  const background = useBackgroundState();
  const parts = genWordParts(wordItem);

  const partsWrapperRef = useRef(null);
  const partRefs = useCallback(
    Array.from(parts, () => React.createRef()),
    []
  );

  console.log(partRefs);

  useLayoutEffect(() => {
    const w = partsWrapperRef.current.offsetWidth;
    const h = partsWrapperRef.current.offsetHeight;
    const currentRefs = partRefs.map((ref) => ref.current);
    console.log(w);

    currentRefs.forEach((ref) => {
      gsap.set(ref, {
        x: gsap.utils.random(0, w - 250),
        y: gsap.utils.random(0, h - 100),
      });
    });
  }, []);

  useEffect(() => {
    const currentRefs = partRefs.map((ref) => ref.current);

    Draggable.create(
      partRefs.map((ref) => ref.current),
      {
        onDrag: onDrag,
        onDragParams: [currentRefs],
      }
    );
  }, []);

  return (
    <MainWrapper>
      <WordImage>
        <img src={wordItem.img} />
        <p>{wordItem.eng}</p>
      </WordImage>

      <PartsWrapper ref={partsWrapperRef} partsCount={parts.length}>
        {parts.map((wordPart, index) => (
          <WordPart
            key={wordPart.id}
            ref={partRefs[index]}
            name={wordPart.text}
            color={background.color}
          />
        ))}
      </PartsWrapper>

      <WordToFillWrapper>lem____</WordToFillWrapper>
    </MainWrapper>
  );
};

export default FillWithPart;
