import React from 'react';
import styled from 'styled-components/native';
import {EScreens, RootStackParamList} from '@shared/config';
import {useSelector} from 'react-redux';
import {RootState} from '@entities/store';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import {useSetScreenOptions} from '@shared/hooks';
import {selectSongById} from '@entities/song/model/songs';

import {PlayPauseButton} from './components/PlayPauseButton';
import {SongPreviewCard} from '@entities/song/ui/SongPreviewCard';
import {selectFavorites} from '@entities/song/model/favorites';

import {Progress} from './components/Progress';
import {usePlayer} from './hooks/usePlayer';
import {useFavorite} from '@entities/song/hooks';

export const TrackPlayer = () => {
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

  const {
    sliderValue,
    onSlidingStart,
    onSlidingComplete,
    duration,
    position,
    togglePlay,
  } = usePlayer(songItem);

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
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
});
