import React, {useEffect, useMemo, useCallback, useRef} from 'react';
import {Animated, Pressable, PressableProps} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '@shared/lib/theme';
import type {ComponentType} from 'react';
import {rem} from '@shared/ui/helpers';
type Props = {
  isLiked: boolean | undefined;
  onPress?: () => void | Promise<void>;
  size?: number;
  showRipple?: boolean;
  disabled?: boolean;
};

const heartFilled = require('@assets/heart-filled-black.png');
const heartOutline = require('@assets/heart-line-black.png');

const timeConfig = {duration: 100};

const springConfig = {
  stiffness: 1500,
  velocity: 70,
  damping: 50,
  mass: 0.8,
};

const DEFAULT_SIZE = rem(28);

export const AnimatedHeartButton: React.FC<Props> = ({
  onPress,
  isLiked = false,
  size = DEFAULT_SIZE,
  showRipple = false,
  disabled,
}) => {
  const value = useMemo(() => new Animated.Value(Number(isLiked)), []);
  const didMount = useRef(false);
  const animateHeart = useCallback(() => {
    if (isLiked) {
      Animated.spring(value, {
        toValue: 1,
        ...springConfig,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(value, {
        toValue: 0,
        useNativeDriver: true,
        ...timeConfig,
      }).start();
    }
  }, [isLiked]);

  useEffect(() => {
    if (didMount.current) {
      animateHeart();
    } else {
      didMount.current = true;
    }
  }, [isLiked]);

  const style = useMemo(
    () => ({
      transform: [
        {
          scale: value,
        },
      ],
    }),
    [value],
  );

  return (
    <HeartWrapper>
      <StyledPressable
        showRipple={showRipple}
        onPress={onPress}
        disabled={disabled}>
        <StyledImage source={heartOutline} size={size} />
        <StyledAnimatedImage source={heartFilled} size={size} style={style} />
      </StyledPressable>
    </HeartWrapper>
  );
};

const StyledAnimatedImage = styled(Animated.Image)<{size: number}>(
  ({size}) => ({
    width: size,
    height: size,
    position: 'absolute',
    top: (40 - size) / 2,
    left: (40 - size) / 2,
  }),
);

export const HeartWrapper = styled.View({
  width: 40,
  height: 40,
  borderRadius: 20,
});

type StyledPressable = PressableProps & {showRipple?: boolean};

const StyledPressable = styled<ComponentType<StyledPressable>>(Pressable).attrs(
  props => ({
    android_ripple: props.showRipple
      ? {
          borderless: true,
          radius: 20,
          color: Colors.gray,
        }
      : undefined,
  }),
)({
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledImage = styled.Image<{size: number}>(({size}) => ({
  width: size,
  height: size,
}));
