import React from 'react';
import {EScreens, RootStackParamList} from '@shared/config';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@entities/store';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';

import {useSetScreenOptions} from '@shared/hooks';
import {selectSongById, setRating} from '@entities/song/model/songs';

import {RatingBlock} from '@shared/ui/RatingBlock';
import {rem} from '@shared/ui/helpers';
import {PlayPauseButton} from '@features/audio-player/components/PlayPauseButton/PlayPauseButton';
import {SongPreviewCard} from '@entities/song/ui/SongPreviewCard';
import {selectFavorites} from '@entities/song/model/favorites';
import styled from 'styled-components/native';
import {Colors} from '@shared/lib/theme';
import {Progress} from '@features/audio-player/components/Progress/Progress';
import {usePlayer} from '@features/audio-player/hooks/usePlayer';
import {useFavorite} from '@entities/song/hooks';

const RATING_BLOCK_SIZE = rem(32);

export const SongAudioScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const route =
    useRoute<RouteProp<RootStackParamList, EScreens.SONG_AUDIO_SCREEN>>();
  const songId = route.params.songId;
  const songItem = useSelector((state: RootState) =>
    selectSongById(state, songId),
  );
  const favoriteItem = useSelector(selectFavorites);

  useSetScreenOptions({title: songItem?.title}, [songId]);

  const {toggleLike} = useFavorite();

  const isLiked = songItem?.id === favoriteItem.favoriteId;

  const songRating = songItem?.rating ?? 0;

  const {
    sliderValue,
    onSlidingStart,
    onSlidingComplete,
    duration,
    position,
    togglePlay,
  } = usePlayer(songItem);

  const handleStarPress = (rating: number) => {
    dispatch(setRating({songId, rating}));
  };

  return (
    <Container>
      {songItem && (
        <SongPreviewCard
          {...songItem}
          title={''}
          showRating={false}
          isLiked={isLiked}
          onHeartPress={toggleLike(songItem, isLiked)}>
          <PlayPauseButton onPress={togglePlay} />
        </SongPreviewCard>
      )}
      <Progress
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
        duration={duration}
        position={position}
        value={sliderValue}
      />
      <RatingBlock
        rating={songRating}
        onPress={handleStarPress}
        size={RATING_BLOCK_SIZE}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView({
  backgroundColor: Colors.white,
  width: '100%',
  height: '100%',
  alignItems: 'center',
});
