import React from 'react';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {ViewStyle, ViewProps} from 'react-native';

type Position = ViewStyle['position'];

const Container = styled.View<{
  height: number;
  paddingTop: number;
  position?: Position;
}>(({height, position}) => ({
  height,
  position,
  zIndex: 1,
  width: '100%',
}));

type SafeAreHeaderWrapperProps = {
  position?: Position;
  paddingTop?: number;
  height: number;
} & ViewProps;

export const SafeAreaHeaderWrapper: React.FC<SafeAreHeaderWrapperProps> = ({
  height,
  position,
  children,
  paddingTop = 0,
  ...rest
}) => {
  const {top} = useSafeAreaInsets();

  return (
    <Container
      {...rest}
      position={position}
      height={height + top}
      paddingTop={paddingTop + top}>
      {children}
    </Container>
  );
};
