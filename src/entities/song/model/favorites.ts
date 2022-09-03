import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@entities/store';

type EntityID = string;

export type FavoritesState = {
  // There can only be one favorite set. As soon as a song is set as favorite, all others are set to non-favorite
  favoriteId: EntityID | null;
};

const initialState: FavoritesState = {
  favoriteId: null,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<EntityID>) => {
      state.favoriteId = action.payload;
    },
    removeFavorite: (state, action: PayloadAction<EntityID>) => {
      if (state.favoriteId === action.payload) {
        state.favoriteId = null;
      }
    },
  },
});

export const {reducer: favoritesReducer} = favoritesSlice;

export const {addFavorite, removeFavorite} = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites;
