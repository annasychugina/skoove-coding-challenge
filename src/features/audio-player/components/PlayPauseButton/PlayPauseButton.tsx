import React from 'react';
import {ActivityIndicator, View, StyleSheet, Pressable} from 'react-native';
import {usePlaybackState, State} from 'react-native-track-player';
import {IconPlay} from '@shared/ui/icons/IconPlay';
import {IconPause} from '@shared/ui/icons/IconPause';
import {rem} from '@shared/ui/helpers';

type Props = {
  onPress: () => void;
};

export const PlayPauseButton: React.FC<Props> = ({onPress}) => {
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;
  const isLoading = state === State.Connecting || state === State.Buffering;

  if (isLoading) {
    return (
      <View style={styles.statusContainer}>
        {isLoading && <ActivityIndicator />}
      </View>
    );
  }

  return (
    <Pressable onPress={onPress}>
      {isPlaying ? <IconPause size={rem(40)} /> : <IconPlay size={rem(40)} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    height: 40,
    marginTop: 20,
    marginBottom: 60,
  },
});
