import React, {useEffect} from 'react';
import {Header} from '@shared/ui/Header';
import {RootStackParamList} from '@shared/config';
import {StackNavigationProp} from '@react-navigation/stack';
import {Container} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSongsList} from '@entities/song/async/fetchSongsList';
import {AppDispatch} from '@entities/store';
import {selectAllSongs} from '@entities/song/model/songs';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const MainScreen = ({navigation}: Props) => {
  console.log(navigation);
  const dispatch = useDispatch<AppDispatch>();
  const songsList = useSelector(selectAllSongs);
  console.log('songsList', songsList);

  useEffect(() => {
    dispatch(fetchSongsList());
  }, [dispatch]);

  return (
    <Container>
      <Header title="Test" showBackButton={false} />
    </Container>
  );
};
