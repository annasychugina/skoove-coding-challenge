import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EScreens, RootStackParamList} from '@shared/config';
import {MainScreen} from '@screens/MainScreen';

export const Stack = createStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <Stack.Navigator initialRouteName={EScreens.MAIN_SCREEN}>
      <Stack.Screen name={EScreens.MAIN_SCREEN} component={MainScreen} />
    </Stack.Navigator>
  );
};
