import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '@shared/lib/theme';

interface Props extends SvgProps {
  size?: number;
  color?: string;
}

export const IconPause = ({size, color = Colors.black, ...rest}: Props) => (
  <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
    <Path
      d="M685.237 808.447h-27.988c-33.594 0-56.016-27.988-56.016-55.996V310.049c0-33.594 28.008-55.996 56.016-55.996h27.988c33.594 0 56.016 28.008 56.016 55.996v436.816c5.585 33.594-22.423 61.582-56.016 61.582zM366.037 808.447h-27.988c-33.594 0-56.016-27.988-56.016-55.996V310.049c0-33.594 28.008-55.996 56.016-55.996h27.988c33.594 0 56.016 28.008 56.016 55.996v436.816c0 33.594-22.422 61.582-56.016 61.582z"
      fill={color}
    />
  </Svg>
);
