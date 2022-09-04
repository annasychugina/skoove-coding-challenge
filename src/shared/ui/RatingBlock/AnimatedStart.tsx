import React from 'react';
import styled from 'styled-components/native';

const starFilled = require('@assets/star-filled-black.png');
const starOutline = require('@assets/star-line-black.png');

interface IProps {
  isActive: boolean;
  size: number;
}

export const AnimatedStar: React.FC<IProps> = ({isActive, size}) => {
  return (
    <StyledStarImage source={isActive ? starFilled : starOutline} size={size} />
  );
};

const StyledStarImage = styled.Image<{size: number}>(({size}) => ({
  width: size,
  height: size,
}));
