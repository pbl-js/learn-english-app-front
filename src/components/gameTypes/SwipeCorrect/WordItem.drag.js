import { gsap } from "gsap";
import didElementFits from "helpers/didElementFits";

const onDragStart = (ref, pointerRef) => {
  gsap.to(ref.current, {
    scale: 0.4,
    duration: 0.3,
  });

  gsap.to(pointerRef.current, { scale: 1.5, duration: 0.3 });
};

const onDrag = (ref, pointerRef) => {
  const refPosition = ref.current.getBoundingClientRect();
  const pointerPosition = pointerRef.current.getBoundingClientRect();

  if (didElementFits(refPosition, pointerPosition)) {
    gsap.to(pointerRef.current, {
      scale: 2,
      duration: 0.3,
    });
  } else {
    gsap.to(pointerRef.current, {
      scale: 1.5,
      duration: 0.3,
    });
  }
};

const onDragEnd = (ref, pointerRef, word, onComplete, onFail) => {
  const refPosition = ref.current.getBoundingClientRect();
  const pointerPosition = pointerRef.current.getBoundingClientRect();

  if (didElementFits(refPosition, pointerPosition)) {
    word.correct ? onComplete() : onFail();
  } else {
    gsap.to(ref.current, { x: 0, y: 0, scale: 1, duration: 0.3 });
    gsap.to(pointerRef.current, {
      scale: 1,
      duration: 0.3,
    });
  }
};

export { onDragStart, onDrag, onDragEnd };
