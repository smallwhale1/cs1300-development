/**
 *
 * @param totalMs duration in ms
 * @returns stringified version in mm:ss format
 */
export const durationToString = (totalMs: number) => {
  const totalS = Math.floor(totalMs / 1000);

  const minutes = Math.floor(totalS / 60);
  const seconds = totalS % 60;

  if (Math.floor(seconds / 10) === 0) {
    return `${minutes}:0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};
