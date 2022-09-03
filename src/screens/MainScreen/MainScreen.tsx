import React, {useEffect} from 'react';
import {EScreens, RootStackParamList} from '@shared/config';
import {StackNavigationProp} from '@react-navigation/stack';

import {useDispatch} from 'react-redux';
import {fetchSongsList} from '@entities/song/async/fetchSongsList';
import {AppDispatch} from '@entities/store';
import {SkoovinSongsList} from '@features/skoovin-songs-list';
import {Container} from '@shared/ui/Container';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const MainScreen = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSongsList());
  }, [dispatch]);

  const handlePress = (songId: string) => {
    navigation.navigate(EScreens.SONG_AUDIO_SCREEN, {songId});
  };

  return (
    <Container>
      <SkoovinSongsList onCardPress={handlePress} />
    </Container>
  );
};
