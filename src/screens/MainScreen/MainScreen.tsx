import React from 'react';
import {Header} from '@shared/ui/Header';
import {RootStackParamList} from '@shared/config';
import {StackNavigationProp} from '@react-navigation/stack';
import {Container} from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const MainScreen = ({navigation}: Props) => {
  console.log(navigation);
  return (
    <Container>
      <Header title="Test" showBackButton={false} />
    </Container>
  );
};
