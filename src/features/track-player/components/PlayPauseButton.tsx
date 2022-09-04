import React from 'react';
import {Pressable} from 'react-native';
import {usePlaybackState, State} from 'react-native-track-player';
import {IconPlay} from '@shared/ui/icons/IconPlay';
import {IconPause} from '@shared/ui/icons/IconPause';
import {rem} from '@shared/ui/helpers';

type Props = {
  onPress: () => void;
};

const BUTTON_SIZE = rem(95);

export const PlayPauseButton: React.FC<Props> = ({onPress}) => {
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;

  return (
    <Pressable onPress={onPress}>
      {isPlaying ? (
        <IconPause size={BUTTON_SIZE} />
      ) : (
        <IconPlay size={BUTTON_SIZE} />
      )}
    </Pressable>
  );
};
