import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';

export const useSetScreenOptions = <T>(options: T, deps: readonly any[]) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions(options);
    // eslint-disable-next-line
  }, deps);
};
