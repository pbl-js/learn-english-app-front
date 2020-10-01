import { gsap } from "gsap";

export const onDragStartWord = (value) => {
  gsap.to(value.target, {
    scale: 0.4,
    duration: 0.3,
  });

  gsap.to(pointerRef.current, { scale: 1.5, duration: 0.3 });
};

export const onDragWord = (value) => {
  if (
    didElementFits(
      multipleRefs.current[0].getBoundingClientRect(),
      pointerRef.current.getBoundingClientRect()
    )
  ) {
    gsap.to(pointerRef.current, {
      scale: 2,
      duration: 0.3,
    });
  }
};

export const onDragEndWord = (value) => {
  gsap.to(multipleRefs.current, { x: 0, y: 0, scale: 1, duration: 0.3 });
  gsap.to(pointerRef.current, {
    scale: 1,
    duration: 0.3,
  });
};
