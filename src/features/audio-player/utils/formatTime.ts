export const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const minStr = String(minutes).padStart(2, '0');
  const secStr = String(seconds).padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${minStr}:${secStr}`;
  } else {
    return `${minutes}:${secStr}`;
  }
};
