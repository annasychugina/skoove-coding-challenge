import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';

import {StatusBar, useColorScheme, ActivityIndicator} from 'react-native';
import {Root} from './src/app/navigators/Root';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '@shared/lib/theme';
import {store} from '@entities/store';
import {TrackPlayerService} from '@shared/lib/TrackPlayerService/TrackPlayerService';
import styled from 'styled-components/native';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function run() {
      const isSetup = await TrackPlayerService.setup();
      setIsPlayerReady(isSetup);
    }

    run();
  }, []);

  if (!isPlayerReady) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={Colors.alabaster}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <Root />
      </NavigationContainer>
    </Provider>
  );
};

export const Container = styled.SafeAreaView({
  backgroundColor: Colors.white,
  width: '100%',
  height: '100%',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export default App;
