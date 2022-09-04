import React, {memo} from 'react';

import {Colors} from '@shared/lib/theme';
import {Typography} from '@shared/ui/Typography';
import {Song} from '@entities/song/model/songs';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {rem} from '@shared/ui/helpers';
import {RatingBlock} from '@shared/ui/RatingBlock';
import {AnimatedHeartButton} from '@shared/ui/AnimatedHeartButton/AnimatedHeartButton';
const {TitleBold2} = Typography;

type Props = Song & {
  isLiked: boolean;
  onPress: () => void;
  onHeartPress: () => void;
};

export const SongPreviewCard = memo(
  ({title, cover, isLiked, onPress, rating, onHeartPress}: Props) => {
    return (
      <Container testID="songCard">
        <StyledPressable onPress={onPress}>
          <StyledImage
            source={{uri: cover}}
            resizeMode={FastImage.resizeMode.cover}
          />
          <TopWrapperAbsolute>
            <RatingBlock rating={rating} />
          </TopWrapperAbsolute>
          <TitleWrapper>
            <TitleBold2 textAlign="center" color={Colors.black}>
              {title}
            </TitleBold2>
          </TitleWrapper>
          <BottomRightWrapperAbsolute>
            <AnimatedHeartButton isLiked={isLiked} onPress={onHeartPress} />
          </BottomRightWrapperAbsolute>
        </StyledPressable>
      </Container>
    );
  },
);

export const Container = styled.View({
  paddingVertical: rem(6),
});

export const StyledImage = styled(FastImage)({
  width: rem(340),
  height: rem(340),
  justifyContent: 'center',
  alignItems: 'center',
});

const TopWrapperAbsolute = styled.View({
  position: 'absolute',
  top: 0,
  left: rem(16),
});

const BottomRightWrapperAbsolute = styled.View({
  position: 'absolute',
  bottom: -4,
  right: rem(16),
});

const TitleWrapper = styled.View({
  position: 'absolute',
  backgroundColor: Colors.white,
  opacity: 0.6,
  width: '100%',
  paddingVertical: rem(4),
  bottom: 0,
});

const StyledPressable = styled.Pressable.attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.white,
  },
}))({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: Colors.white,
});
