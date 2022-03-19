import React from 'react';
import {BaseNavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

type Props = {
  component: React.ComponentType<any>;
  params?: Record<string | number, any>;
  screens?: Screen[];
};
type Screen = {
  component: React.ComponentType<any>;
  params?: Record<string | number, any>;
  name: string;
};
export const MockedNavigator = ({
  component,
  params = {},
  screens = [],
}: Props) => (
  <BaseNavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="MockedScreen"
        component={component}
        initialParams={params}
      />
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          initialParams={screen.params}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  </BaseNavigationContainer>
);
