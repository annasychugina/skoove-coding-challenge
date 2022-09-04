import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '@shared/lib/theme';

interface Props extends SvgProps {
  size?: number;
  color?: string;
}

export const IconPlay = ({size, color = Colors.black, ...rest}: Props) => (
  <Svg viewBox="0 0 142.448 142.448" width={size} height={size} {...rest}>
    <Path
      fill={color}
      d="M142.411 68.9C141.216 31.48 110.968 1.233 73.549.038c-20.361-.646-39.41 7.104-53.488 21.639C6.527 35.65-.584 54.071.038 73.549c1.194 37.419 31.442 67.667 68.861 68.861.779.025 1.551.037 2.325.037 19.454 0 37.624-7.698 51.163-21.676 13.534-13.972 20.646-32.394 20.024-51.871zm-30.798 41.436c-10.688 11.035-25.032 17.112-40.389 17.112-.614 0-1.228-.01-1.847-.029-29.532-.943-53.404-24.815-54.348-54.348-.491-15.382 5.122-29.928 15.806-40.958 10.688-11.035 25.032-17.112 40.389-17.112.614 0 1.228.01 1.847.029 29.532.943 53.404 24.815 54.348 54.348.491 15.382-5.123 29.928-15.806 40.958z"
    />
    <Path
      fill={color}
      d="M94.585 67.086 63.001 44.44c-3.369-2.416-8.059-.008-8.059 4.138v45.293c0 4.146 4.69 6.554 8.059 4.138l31.583-22.647c2.834-2.031 2.834-6.244.001-8.276z"
    />
  </Svg>
);