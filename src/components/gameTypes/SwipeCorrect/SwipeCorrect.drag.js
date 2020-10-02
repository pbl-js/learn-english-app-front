import { gsap } from "gsap";
import didElementFits from "helpers/didElementFits";

const onDragStart = (pointerRef) => {
  gsap.to(pointerRef.current, { scale: 0.4, duration: 0.3 });
};

const onDrag = (pointerRef, itemRefs) => {
  const pointerRefPosition = pointerRef.current.getBoundingClientRect();

  let itemRefsPosition = itemRefs.map((itemRef) =>
    itemRef.current.getBoundingClientRect()
  );

  itemRefs.forEach((itemRef, index) => {
    if (didElementFits(pointerRefPosition, itemRefsPosition[index])) {
      gsap.to(itemRef.current, { scale: 1.1, duration: 0.3 });
    } else {
      gsap.to(itemRef.current, { scale: 1, duration: 0.3 });
    }
  });
};

const onDragEnd = (pointerRef, itemRefs, wordsToPlay, onComplete, onFail) => {
  const pointerRefPosition = pointerRef.current.getBoundingClientRect();

  const itemRefsPosition = itemRefs.map((itemRef) =>
    itemRef.current.getBoundingClientRect()
  );

  gsap.to(pointerRef.current, { x: 0, y: 0 });
  gsap.to(pointerRef.current, { scale: 1, duration: 0.3 });

  wordsToPlay.forEach((word, index) => {
    if (didElementFits(pointerRefPosition, itemRefsPosition[index])) {
      word.correct ? onComplete() : onFail();
    }
  });
};

export { onDragStart, onDrag, onDragEnd };
