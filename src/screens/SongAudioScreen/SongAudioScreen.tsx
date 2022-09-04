import React from 'react';
import {EScreens, RootStackParamList} from '@shared/config';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@entities/store';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';

import {useSetScreenOptions} from '@shared/hooks';
import {selectSongById, setRating} from '@entities/song/model/songs';
import {Container} from '@shared/ui/Container';
import {RatingBlock} from '@shared/ui/RatingBlock';
import {rem} from '@shared/ui/helpers';

export const SongAudioScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const route =
    useRoute<RouteProp<RootStackParamList, EScreens.SONG_AUDIO_SCREEN>>();
  const songId = route.params.songId;

  const songItem = useSelector((state: RootState) =>
    selectSongById(state, songId),
  );

  const songRating = songItem?.rating ?? 0;

  useSetScreenOptions({title: songItem?.title}, [songId]);

  const handleStarPress = (rating: number) => {
    dispatch(setRating({songId, rating}));
  };

  return (
    <Container>
      <RatingBlock
        rating={songRating}
        onPress={handleStarPress}
        size={rem(32)}
      />
    </Container>
  );
};
