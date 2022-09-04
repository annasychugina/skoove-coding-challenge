import React, {memo, PropsWithChildren} from 'react';
import {View} from 'react-native';
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
    const renderContent = () => {
      return (
        <>
          <StyledImage
            source={{uri: cover}}
            resizeMode={FastImage.resizeMode.cover}>
            <View>{children}</View>
          </StyledImage>
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
        </>
      );
    };
    return (
      <Container testID="songCard">
        {typeof onPress === 'function' ? (
          <StyledPressable onPress={onPress}>{renderContent}</StyledPressable>
        ) : (
          <View>
            {renderContent()}
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

const TitleWrapper = styled.View<{height: number}>(({height}) => ({
  position: 'absolute',
  backgroundColor: Colors.white,
  opacity: 0.6,
  width: '100%',
  bottom: 0,
  height: height,
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
