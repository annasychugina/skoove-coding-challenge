import {useState, useEffect, useCallback} from 'react';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  useProgress,
  usePlaybackState,
  State,
} from 'react-native-track-player';
import {Song} from '@entities/song/model/songs';

async function trackPlayerInit(track?: Song) {
  if (!track) {
    return false;
  }
  await TrackPlayer.reset();
  await TrackPlayer.add({
    duration: Math.floor(track.totalDurationMs / 1000),
    id: track.id,
    url: track.audio,
    title: track.title,
    artwork: track.cover,
  });

  return true;
}

export const usePlayer = (track?: Song) => {
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;

  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const {duration, position} = useProgress();
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  useEffect(() => {
    async function startPlayer() {
      let isInit = await trackPlayerInit(track);
      setIsTrackPlayerInit(isInit);
    }
    startPlayer();
  }, []);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }, [isPlaying]);
  const slidingStarted = () => {
    setIsSeeking(true);
  };

  const slidingCompleted = async (value: number) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  return {
    isTrackPlayerInit,
    sliderValue,
    duration,
    position,
    onSlidingStart: slidingStarted,
    onSlidingComplete: slidingCompleted,
    togglePlay,
  };
};
