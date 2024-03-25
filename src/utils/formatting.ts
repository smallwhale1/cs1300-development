export const durationToString = (duration: number) => {
  const durationSeconds = Math.floor(duration / 1000);
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = durationSeconds % 60;

  if (Math.floor(seconds / 10) === 0) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};
