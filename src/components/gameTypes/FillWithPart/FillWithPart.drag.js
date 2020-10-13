import { gsap } from "gsap";

export function onDragStart(wordWrapper) {
  gsap.to(this.target, {
    scale: 0.5,
    duration: 0.2,
  });
  gsap.to(wordWrapper, {
    scale: 1.1,
    duration: 0.2,
  });
}

export function onDrag(wordWrapper, currentRefs) {
  let i = currentRefs.length;

  while (--i > -1) {
    if (this.hitTest(currentRefs[i], "1%")) {
      const direction = this.getDirection(currentRefs[i]);
      const isLeft = direction.includes("left");
      const isTop = direction.includes("up");

      gsap.to(currentRefs[i], {
        x: isLeft ? "+=10" : "-=10",
        y: isTop ? "+=10" : "-=10",
        duration: 0.1,
      });
    }
  }

  if (this.hitTest(wordWrapper)) {
    gsap.to(wordWrapper, {
      scale: 1.2,
      duration: 0.2,
    });
  } else {
    gsap.to(wordWrapper, {
      scale: 1.1,
      duration: 0.2,
    });
  }
}

export function onDragEnd(wordWrapper, checkCorrectAnswer) {
  gsap.to(this.target, {
    scale: 1,
    duration: 0.2,
  });
  gsap.to(wordWrapper, {
    scale: 1,
    duration: 0.2,
  });

  if (this.hitTest(wordWrapper, "30%")) {
    checkCorrectAnswer(this);
  }
}
