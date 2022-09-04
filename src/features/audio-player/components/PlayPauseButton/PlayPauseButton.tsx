import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator, Pressable} from 'react-native';
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
  const isLoading = state === State.Connecting || state === State.Buffering;

  if (isLoading) {
    return (
      <StatusContainer>{isLoading && <ActivityIndicator />}</StatusContainer>
    );
  }

  return (
    <ButtonContainer onPress={onPress}>
      {isPlaying ? (
        <IconPause size={BUTTON_SIZE} />
      ) : (
        <IconPlay size={BUTTON_SIZE} />
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled(Pressable)({});

const StatusContainer = styled.View({
  height: rem(40),
  marginTop: rem(20),
  marginBottom: rem(60),
});
