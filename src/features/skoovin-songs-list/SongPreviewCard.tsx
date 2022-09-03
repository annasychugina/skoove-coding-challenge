import React, {memo} from 'react';
import {Container, StyledImage, ImageWrapper} from './styles';
import {Colors} from '@shared/lib/theme';
import {Typography} from '@shared/ui/Typography';
import {Song} from '@entities/song/model/songs';
import FastImage from 'react-native-fast-image';
const {NormalRegular} = Typography;

type Props = Song & {onPress: () => void};

export const SongPreviewCard = memo(({title, cover, onPress}: Props) => {
  return (
    <Container testID="songCard">
      <ImageWrapper onPress={onPress}>
        <StyledImage
          source={{uri: cover}}
          resizeMode={FastImage.resizeMode.cover}
        />
        <NormalRegular textAlign="center" color={Colors.paleSlate}>
          {title}
        </NormalRegular>
      </ImageWrapper>
    </Container>
  );
});
