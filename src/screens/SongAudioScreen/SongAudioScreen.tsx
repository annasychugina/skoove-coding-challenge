import React from 'react';
import {EScreens, RootStackParamList} from '@shared/config';
import {useSelector} from 'react-redux';
import {RootState} from '@entities/store';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import {Container} from '@shared/ui/Container';
import {useSetScreenOptions} from '@shared/hooks';
import {selectSongById} from '@entities/song/model/songs';

import styled from 'styled-components/native';
import {TrackPlayer} from '@features/track-player';
import {TrackRating} from '@features/track-rating';
import {rem} from '@shared/ui/helpers';

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
      <ContentContainer>
        <TrackPlayer />
        <TrackRating />
      </ContentContainer>
    </Container>
  );
};

const ContentContainer = styled.View({
  marginTop: rem(20),
  alignItems: 'center',
});
