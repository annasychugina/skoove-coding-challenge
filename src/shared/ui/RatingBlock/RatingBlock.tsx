import React from 'react';
import type {FC} from 'react';
import styled from 'styled-components/native';
import {rem} from '@shared/ui/helpers';
import {AnimatedStar} from '@shared/ui/RatingBlock/AnimatedStart';
import {Pressable} from 'react-native';
import {TestProps} from '../../lib/utils/TestUtils';

const DEFAULT_START_COUNT = 5;
const DEFAULT_SIZE = rem(20);

type Props = {
  rating: number;
  stars?: number;
  size?: number;
  onPress?: (newRating: number) => void;
} & TestProps;

export const RatingBlock: FC<Props> = ({
  rating,
  stars = DEFAULT_START_COUNT,
  size = DEFAULT_SIZE,
  onPress,
}) => {
  const handlePres = (index: number) => () => {
    onPress?.(index + 1);
  };
  return (
    <StyledRow>
      {Array.from(new Array(Math.max(stars || 1, 1))).map((_, index) => (
        <Pressable
          pointerEvents="box-only"
          onPress={handlePres(index)}
          key={`RatingStar${index}`}>
          <StyledStarView>
            <AnimatedStar isActive={rating >= index + 1} size={size} />
          </StyledStarView>
        </Pressable>
      ))}
    </StyledRow>
  );
};

const StyledRow = styled.View({
  flexDirection: 'row',
});

const StyledStarView = styled.View({
  padding: rem(4),
});
