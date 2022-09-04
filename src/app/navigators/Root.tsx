import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {EScreens, RootStackParamList} from '@shared/config';
import {MainScreen} from '@screens/MainScreen';
import {SongAudioScreen} from '@screens/SongAudioScreen';

export const Stack = createStackNavigator<RootStackParamList>();

const stackNavigationOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
};

export const Root = () => {
  return (
    <Stack.Navigator initialRouteName={EScreens.MAIN_SCREEN}>
      <Stack.Screen
        name={EScreens.MAIN_SCREEN}
        component={MainScreen}
        options={{
          title: "Skoovin'",
          ...stackNavigationOptions,
        }}
      />
      <Stack.Screen
        name={EScreens.SONG_AUDIO_SCREEN}
        component={SongAudioScreen}
        options={stackNavigationOptions}
      />
    </Stack.Navigator>
  );
};
