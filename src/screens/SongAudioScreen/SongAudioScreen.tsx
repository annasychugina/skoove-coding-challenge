import React, {useEffect} from 'react';
import {EScreens, RootStackParamList} from '@shared/config';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSongsList} from '@entities/song/async/fetchSongsList';
import {AppDispatch, RootState} from '@entities/store';
import {SkoovinSongsList} from '@features/skoovin-songs-list';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';

import {useSetScreenOptions} from '@shared/hooks';
import {selectSongById} from '@entities/song/model/songs';
import {Container} from '@shared/ui/Container';

export const SongAudioScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const route =
    useRoute<RouteProp<RootStackParamList, EScreens.SONG_AUDIO_SCREEN>>();
  const songId = route.params.songId;

  const songItem = useSelector((state: RootState) =>
    selectSongById(state, songId),
  );

  useSetScreenOptions({title: songItem?.title}, [songId]);

  useEffect(() => {
    dispatch(fetchSongsList());
  }, [dispatch]);

  return (
    <Container>
      <SkoovinSongsList />
    </Container>
  );
};
