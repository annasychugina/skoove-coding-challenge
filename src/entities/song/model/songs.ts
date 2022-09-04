import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import {EntityState} from '@reduxjs/toolkit';
import {fetchSongsList} from '../async/fetchSongsList';
import {ApiSong} from '@shared/api/models';
import {RootState} from '../../store';

type EntityID = string;

export type Song = ApiSong & {
  id: EntityID;
  rating: number;
};
const adapter = createEntityAdapter<Song>();

export interface SongsListsState extends EntityState<Song> {
  isLoading: boolean;
  error: string;
}

const songs = createSlice({
  name: 'songs',
  initialState: adapter.getInitialState({
    isLoading: false,
    error: '',
  }),
  reducers: {
    setRating: (
      state,
      {payload}: PayloadAction<{songId: EntityID; rating: number}>,
    ) => {
      const existingSong = adapter
        .getSelectors()
        .selectById(state, payload.songId);

      if (existingSong) {
        adapter.updateOne(state, {
          id: existingSong.id,
          changes: {
            rating: payload.rating,
          },
        });
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSongsList.fulfilled, (state, {payload}) => {
        adapter.removeAll(state);
        if (payload.data.length > 0) {
          adapter.upsertMany(
            state,
            payload.data.map((item, index) => {
              return {
                id: String(index),
                ...item,
                rating: 0,
              };
            }),
          );
        }
        state.isLoading = false;
      })
      .addCase(fetchSongsList.rejected, (state, {error}) => {
        state.isLoading = false;
        state.error = error?.message ?? '';
      })
      .addCase(fetchSongsList.pending, state => {
        state.isLoading = true;
        state.error = '';
      });
  },
});

export const {reducer: songsReducer} = songs;

export const {
  selectById: selectSongById,
  selectAll: selectAllSongs,
  selectEntities: selectAllSongsEntities,
} = adapter.getSelectors<RootState>(state => state.songs);

export const {setRating} = songs.actions;
