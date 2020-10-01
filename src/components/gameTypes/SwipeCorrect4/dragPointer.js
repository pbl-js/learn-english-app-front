import { gsap } from "gsap";

export const onDragStartPointer = (value) => {
  gsap.to(pointerRef.current, { scale: 0.4, duration: 0.3 });
};

export const onDragEndPointer = (value) => {
  gsap.to(pointerRef.current, { x: 0, y: 0 });
  gsap.to(pointerRef.current, { scale: 1, duration: 0.3 });
};
