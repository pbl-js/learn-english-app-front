import { gsap } from "gsap";

const onDragStart = function () {
  gsap.to(this.target, { scale: 0.4, duration: 0.3 });
};

const onDrag = function (itemRefs) {
  itemRefs.forEach((itemRef) => {
    if (this.hitTest(itemRef.current, "50%")) {
      gsap.to(itemRef.current, { scale: 1.1, duration: 0.3 });
    } else {
      gsap.to(itemRef.current, { scale: 1, duration: 0.3 });
    }
  });
};

const onDragEnd = function (itemRefs, wordsToPlay, onComplete, onFail) {
  gsap.to(this.target, { x: 0, y: 0, scale: 1, duration: 0.3 });

  let work = true; // This variable eliminate problem with "this" undefined when component did unmount

  for (let index = 0; index < wordsToPlay.length && work; index++) {
    if (this.hitTest(itemRefs[index].current, "50%")) {
      if (wordsToPlay[index].correct) {
        onComplete();
      } else {
        onFail();
      }

      work = false;
    }
  }
};

export { onDragStart, onDrag, onDragEnd };
