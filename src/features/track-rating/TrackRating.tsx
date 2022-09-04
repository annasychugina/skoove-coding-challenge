import React from 'react';
import {EScreens, RootStackParamList} from '@shared/config';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@entities/store';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import {selectSongById, setRating} from '@entities/song/model/songs';

import {RatingBlock} from '@shared/ui/RatingBlock';
import {rem} from '@shared/ui/helpers';

const RATING_BLOCK_SIZE = rem(32);

export const TrackRating = () => {
  const dispatch = useDispatch<AppDispatch>();
  const route =
    useRoute<RouteProp<RootStackParamList, EScreens.SONG_AUDIO_SCREEN>>();
  const songId = route.params.songId;
  const songItem = useSelector((state: RootState) =>
    selectSongById(state, songId),
  );

  const songRating = songItem?.rating ?? 0;

  const handleStarPress = (rating: number) => {
    dispatch(setRating({songId, rating}));
  };

  return (
    <RatingBlock
      rating={songRating}
      onPress={handleStarPress}
      size={RATING_BLOCK_SIZE}
    />
  );
};
