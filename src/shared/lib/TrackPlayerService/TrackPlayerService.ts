import TrackPlayer, {Capability} from 'react-native-track-player';

const setup = async (): Promise<boolean> => {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      stoppingAppPausesPlayback: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SeekTo,
      ],
    });

    isSetup = true;
  } finally {
    return isSetup;
  }
};

export const TrackPlayerService = {
  setup,
};
