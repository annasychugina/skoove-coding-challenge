import React, {useMemo} from 'react';
import Slider, {SliderProps} from '@react-native-community/slider';
import {Colors} from '@shared/lib/theme';
import styled from 'styled-components/native';
import {rem} from '@shared/ui/helpers';
import {Typography} from '@shared/ui/Typography';
import {formatTime} from '../../utils';

const {NormalRegular} = Typography;

type Props = SliderProps & {position: number; duration: number};

export const Progress: React.FC<Props> = ({
  value,
  position,
  duration,
  onSlidingComplete,
  onSlidingStart,
}) => {
  const totalTime = useMemo(() => formatTime(duration), [duration]);
  const currentTime = useMemo(() => formatTime(position), [position]);
  return (
    <>
      <StyledSlider
        value={value}
        minimumValue={0}
        maximumValue={1}
        thumbTintColor={Colors.linkWater}
        minimumTrackTintColor={Colors.gray}
        maximumTrackTintColor={Colors.black}
        onSlidingComplete={onSlidingComplete}
        onSlidingStart={onSlidingStart}
      />
      <LabelTextContainer>
        <NormalRegular>{`${currentTime} / ${totalTime}`}</NormalRegular>
      </LabelTextContainer>
    </>
  );
};

const StyledSlider = styled(Slider)({
  flexDirection: 'row',
  marginTop: 20,
  height: rem(40),
  width: rem(380),
});

const LabelTextContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
});
