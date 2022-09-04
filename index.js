/**
 * @format
 */
import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {PlaybackService} from '@shared/lib/TrackPlayerService/PlaybackService';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
