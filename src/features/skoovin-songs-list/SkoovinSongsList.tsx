import React, {useCallback} from 'react';
import type {FlatListProps, ListRenderItem} from 'react-native';
import {SongPreviewCard} from './SongPreviewCard';
import {selectAllSongs, Song} from '@entities/song/model/songs';
import {useSelector} from 'react-redux';
import {ItemsList} from '@shared/ui/ItemsList';
import styled from 'styled-components/native';
import {rem} from '@shared/ui/helpers';

type Props = {} & FlatListProps<Song>;

const keyExtractor = (item: Song) => item.id.toString();

export const SkoovinSongsList = () => {
  const songsList = useSelector(selectAllSongs);
  const handlePressCard = useCallback(() => {
    // TODO navigate
  }, []);
  const handleLike = useCallback(() => {}, []);
  const renderSongItem: ListRenderItem<Song> = ({item}) => (
    <SongPreviewCard
      {...item}
      onPress={handlePressCard}
      isLiked={false}
      onHeartPress={handleLike}
    />
  );
  return (
    <SongsList
      testID="songsList"
      initialNumToRender={4}
      keyExtractor={keyExtractor}
      data={songsList}
      renderItem={renderSongItem}
    />
  );
};

export const SongsList = styled(ItemsList).attrs(() => ({
  contentContainerStyle: {
    paddingHorizontal: rem(16),
    flexGrow: 1,
  },
}))`` as React.FC<FlatListProps<Song>>;
