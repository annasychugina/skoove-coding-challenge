import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Root} from './src/app/navigators/Root';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '@shared/lib/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={Colors.alabaster}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Root />
    </NavigationContainer>
  );
};

export default App;
