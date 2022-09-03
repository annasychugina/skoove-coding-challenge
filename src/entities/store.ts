import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {SongsListsState, songsReducer} from './song/model/songs';
import {FavoritesState, favoritesReducer} from './song/model/favorites';

export type RootState = {
  songs: SongsListsState;
  favorites: FavoritesState;
};

const rootReducer = combineReducers<RootState>({
  songs: songsReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
