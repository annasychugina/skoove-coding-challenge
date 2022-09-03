import React, {useEffect} from 'react';
import {RootStackParamList} from '@shared/config';
import {StackNavigationProp} from '@react-navigation/stack';
import {Container} from './styles';
import {useDispatch} from 'react-redux';
import {fetchSongsList} from '@entities/song/async/fetchSongsList';
import {AppDispatch} from '@entities/store';
import {SkoovinSongsList} from '@features/skoovin-songs-list';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const MainScreen = ({navigation}: Props) => {
  console.log(navigation);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSongsList());
  }, [dispatch]);

  return (
    <Container>
      <SkoovinSongsList />
    </Container>
  );
};
