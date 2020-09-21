export default (primary, secondary) => {
  if (
    primary.top > secondary.top &&
    primary.bottom < secondary.bottom &&
    primary.left > secondary.left &&
    primary.right < secondary.right
  ) {
    return true;
  } else {
    return false;
  }
};

// If primary fits in secondary = true
