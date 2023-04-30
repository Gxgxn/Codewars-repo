// Simple Fun #156: Rotate Paper By 180 Degrees
function rotatePaper(number) {
  const key = { 2: 2, 5: 5, 6: 9, 8: 8, 9: 6, 0: 0 };
  return (
    [...number]
      .map((e) => key[e])
      .reverse()
      .join("") === number
  );
}
