export enum EScreens {
  MAIN_SCREEN = 'MainScreen',
  SONG_AUDIO_SCREEN = 'SongAudioScreen',
}

export type RootStackParamList = {
  [EScreens.MAIN_SCREEN]: undefined;
  [EScreens.SONG_AUDIO_SCREEN]: {songId: string};
};
