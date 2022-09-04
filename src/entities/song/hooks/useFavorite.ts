import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Song} from '../model/songs';
import {addFavorite, removeFavorite} from '../model/favorites';

export const useFavorite = () => {
  const dispatch = useDispatch();
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
  return {
    toggleLike,
  };
};
