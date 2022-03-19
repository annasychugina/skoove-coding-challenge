import {Dimensions} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

export const WINDOW_HEIGHT =
  initialWindowMetrics?.frame.height || Dimensions.get('window').height;
export const WINDOW_WIDTH =
  initialWindowMetrics?.frame.width || Dimensions.get('window').width;
