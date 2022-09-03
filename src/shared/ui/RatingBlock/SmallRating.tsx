import React from 'react';
import type {FC} from 'react';
import styled from 'styled-components/native';
import {rem} from '@shared/ui/helpers';

type Props = {
  rating: number;
  stars?: number;
};

const starFilled = require('@assets/star-filled-black.png');
const starOutline = require('@assets/star-line-black.png');
const DEFAULT_START_COUNT = 5;

export const SmallRating: FC<Props> = ({
  rating,
  stars = DEFAULT_START_COUNT,
}) => {
  return (
    <StyledRow>
      {Array.from(new Array(Math.max(stars || 1, 1))).map((_, index) => (
        <StyledStar key={`RatingStar${index}`}>
          <StyledImage
            source={rating >= index + 1 ? starFilled : starOutline}
          />
        </StyledStar>
      ))}
    </StyledRow>
  );
};

const StyledRow = styled.View({
  flexDirection: 'row',
});

const StyledStar = styled.View({
  padding: rem(4),
});

const StyledImage = styled.Image({
  width: rem(20),
  height: rem(20),
});
