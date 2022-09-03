import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {SongsListsState, songsReducer} from './song/model/songs';

export type RootState = {
  songs: SongsListsState;
};

const rootReducer = combineReducers<RootState>({
  songs: songsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
