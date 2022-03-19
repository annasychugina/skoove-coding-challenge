import React, {PropsWithChildren} from 'react';
import {Typography} from '../Typography';
import type {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';
import {StyledHeaderBackButton} from './components';
import {StyledContentView, Container, StyledBlock} from './styles';
import {HEADER_HEIGHT} from './const';
import {Colors} from '../../lib/theme';

const {TitleBold2} = Typography;

export type HeaderProps = {
  style?: StyleProp<ViewStyle>;
  title?: string;
  showBackButton?: boolean;
  color?: string;
  backIcon?: ImageSourcePropType;
  onBackPress?: () => void;
};

export const Header = ({
  style,
  onBackPress,
  backIcon,
  title,
  children,
  showBackButton = true,
  color = Colors.black,
}: PropsWithChildren<HeaderProps>) => (
  <Container style={style} height={HEADER_HEIGHT} paddingTop={6}>
    {showBackButton ? (
      <StyledHeaderBackButton onPress={onBackPress} icon={backIcon} />
    ) : (
      <StyledBlock />
    )}
    <StyledContentView>
      <TitleBold2 numberOfLines={1} flexShrink={1} color={color}>
        {title}
      </TitleBold2>
    </StyledContentView>
    {children}
  </Container>
);
