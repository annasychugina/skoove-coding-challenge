import React, {useCallback} from 'react';
import type {FlatListProps, ListRenderItem} from 'react-native';
import {SongPreviewCard} from './SongPreviewCard';
import {selectAllSongs, Song} from '@entities/song/model/songs';
import {useSelector} from 'react-redux';
import {ItemsList} from '@shared/ui/ItemsList';

type Props = {} & FlatListProps<Song>;

const keyExtractor = (item: Song) => item.id.toString();

export const SkoovinSongsList = () => {
  const songsList = useSelector(selectAllSongs);
  const handlePressCard = useCallback(() => {
    // TODO navigate
  }, []);
  const renderSongItem: ListRenderItem<Song> = ({item}) => (
    <SongPreviewCard {...item} onPress={handlePressCard} />
  );
  return (
    <ItemsList<Song>
      testID="songsList"
      keyExtractor={keyExtractor}
      data={songsList}
      renderItem={renderSongItem}
    />
  );
};
