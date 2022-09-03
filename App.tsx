import React from 'react';
import {Provider} from 'react-redux';

import {StatusBar, useColorScheme} from 'react-native';
import {Root} from './src/app/navigators/Root';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '@shared/lib/theme';
import {store} from '@shared/store';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

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

export default App;
