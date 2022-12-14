import React, {memo} from 'react';
import {View} from 'react-native';
import {Colors} from '@shared/lib/theme';
import {Typography} from '@shared/ui/Typography';
import {Song} from '../model/songs';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {rem} from '@shared/ui/helpers';
import {RatingBlock} from '@shared/ui/RatingBlock';
import {AnimatedHeartButton} from '@shared/ui/AnimatedHeartButton';
const {TitleBold2} = Typography;

type Props = Song & {
  title?: string;
  isLiked: boolean;
  showRating?: boolean;
  onPress?: () => void;
  onHeartPress: () => void;
};

const HEAR_BUTTON_SIZE = rem(28);

export const SongPreviewCard: React.FC<Props> = memo(
  ({
    title,
    cover,
    isLiked,
    onPress,
    rating,
    showRating = true,
    onHeartPress,
    children,
  }) => {
    return (
      <Container testID="songCard">
        {typeof onPress === 'function' ? (
          <StyledPressable onPress={onPress}>
            <StyledImage
              source={{uri: cover}}
              resizeMode={FastImage.resizeMode.cover}>
              <View>{children}</View>
              {showRating && (
                <TopWrapperAbsolute>
                  <RatingBlock rating={rating} />
                </TopWrapperAbsolute>
              )}
              {!!title && (
                <TitleWrapper height={HEAR_BUTTON_SIZE}>
                  <TitleBold2 textAlign="center" color={Colors.black}>
                    {title}
                  </TitleBold2>
                </TitleWrapper>
              )}
              <BottomRightWrapperAbsolute>
                <AnimatedHeartButton
                  isLiked={isLiked}
                  onPress={onHeartPress}
                  size={HEAR_BUTTON_SIZE}
                />
              </BottomRightWrapperAbsolute>
            </StyledImage>
          </StyledPressable>
        ) : (
          <View>
            <StyledImage
              source={{uri: cover}}
              resizeMode={FastImage.resizeMode.cover}>
              <View>{children}</View>
            </StyledImage>
            <TitleWrapper height={HEAR_BUTTON_SIZE} />
            <BottomRightWrapperAbsolute>
              <AnimatedHeartButton
                isLiked={isLiked}
                onPress={onHeartPress}
                size={HEAR_BUTTON_SIZE}
              />
            </BottomRightWrapperAbsolute>
          </View>
        )}
      </Container>
    );
  },
);

const Container = styled.View({
  paddingVertical: rem(6),
});

const StyledImage = styled(FastImage)({
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
  bottom: 0,
  right: 0,
});

const TitleWrapper = styled.View<{height: number}>(({height}) => ({
  position: 'absolute',
  backgroundColor: Colors.white,
  opacity: 0.6,
  width: '100%',
  bottom: 0,
  height: height + rem(16),
  justifyContent: 'center',
  alignItems: 'center',
}));

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
