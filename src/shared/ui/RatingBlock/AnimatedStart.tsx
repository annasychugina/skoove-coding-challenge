import React from 'react';

import styled from 'styled-components/native';

interface IProps {
  isActive: boolean;
  size: number;
}
const starFilled = require('@assets/star-filled-black.png');
const starOutline = require('@assets/star-line-black.png');
export const AnimatedStar: React.FC<IProps> = ({isActive, size}) => {
  return (
    <StyledStarImage source={isActive ? starFilled : starOutline} size={size} />
  );
};

const StyledStarImage = styled.Image<{size: number}>(({size}) => ({
  width: size,
  height: size,
}));
