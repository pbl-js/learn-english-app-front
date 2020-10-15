import { gsap } from "gsap";
import didElementFits from "helpers/didElementFits";

const onDragStart = function (pointerRef) {
  gsap.to(this.target, {
    scale: 0.4,
    duration: 0.3,
  });

  gsap.to(pointerRef.current, { scale: 1.5, duration: 0.3 });
};

const onDrag = function (pointerRef) {
  if (this.hitTest(pointerRef.current, "50%")) {
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

const onDragEnd = function (pointerRef, word, onComplete, onFail) {
  if (this.hitTest(pointerRef.current, "50%")) {
    word.correct ? onComplete() : onFail();
  } else {
    gsap.to(this.target, { x: 0, y: 0, scale: 1, duration: 0.3 });
    gsap.to(pointerRef.current, {
      scale: 1,
      duration: 0.3,
    });
  }
};

export { onDragStart, onDrag, onDragEnd };
