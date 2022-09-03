import React, {useCallback} from 'react';
import type {FlatListProps, ListRenderItem} from 'react-native';
import {SongPreviewCard} from './SongPreviewCard';
import {selectAllSongs, Song} from '@entities/song/model/songs';
import {useDispatch, useSelector} from 'react-redux';
import {ItemsList} from '@shared/ui/ItemsList';
import styled from 'styled-components/native';
import {rem} from '@shared/ui/helpers';
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from '@entities/song/model/favorites';

type Props = {
  onCardPress: (id: string) => void;
};

const keyExtractor = (item: Song) => item.id.toString();

export const SkoovinSongsList = ({onCardPress}: Props) => {
  const dispatch = useDispatch();
  const songsList = useSelector(selectAllSongs);
  const favoriteItem = useSelector(selectFavorites);

  const toggleLike = useCallback(
    (item: Song, isLiked: boolean) => () => {
      if (isLiked) {
        dispatch(removeFavorite(item.id));
      } else {
        dispatch(addFavorite(item.id));
      }
    },
    [dispatch],
  );

  const handlePressCard = useCallback(
    (item: Song) => () => {
      onCardPress(item.id);
    },
    [onCardPress],
  );

  const renderSongItem: ListRenderItem<Song> = useCallback(
    ({item}) => {
      const isLiked = item.id === favoriteItem.favoriteId;
      return (
        <SongPreviewCard
          key={item.id}
          {...item}
          onPress={handlePressCard(item)}
          isLiked={isLiked}
          onHeartPress={toggleLike(item, isLiked)}
        />
      );
    },
    [favoriteItem.favoriteId, handlePressCard, toggleLike],
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
