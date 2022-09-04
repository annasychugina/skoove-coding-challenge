import React from 'react';
import {EScreens, RootStackParamList} from '@shared/config';
import {useSelector} from 'react-redux';
import {RootState} from '@entities/store';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';

import {useSetScreenOptions} from '@shared/hooks';
import {selectSongById} from '@entities/song/model/songs';

import styled from 'styled-components/native';
import {Colors} from '@shared/lib/theme';
import {TrackPlayer} from '@features/track-player';
import {TrackRating} from '@features/track-rating';

export const SongAudioScreen = () => {
  const route =
    useRoute<RouteProp<RootStackParamList, EScreens.SONG_AUDIO_SCREEN>>();
  const songId = route.params.songId;
  const songItem = useSelector((state: RootState) =>
    selectSongById(state, songId),
  );

  useSetScreenOptions({title: songItem?.title}, [songId]);

  return (
    <Container>
      <TrackPlayer />
      <TrackRating />
    </Container>
  );
};

const Container = styled.SafeAreaView({
  backgroundColor: Colors.white,
  width: '100%',
  height: '100%',
  alignItems: 'center',
});
