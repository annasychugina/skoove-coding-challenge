import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {rem} from '@shared/ui/helpers';

type ImageProps = {};

export const Container = styled.View({
  paddingHorizontal: 22,
  paddingTop: 24,
});

export const ImageWrapper = styled.Pressable<ImageProps>(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledImage = styled(FastImage)({
  width: rem(340),
  height: rem(340),
});
