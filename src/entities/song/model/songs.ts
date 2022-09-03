import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {EntityState} from '@reduxjs/toolkit';
import {fetchSongsList} from '../async/fetchSongsList';
import {ApiSong} from '@shared/api/models';
import {RootState} from '../../store';
import {uuidv4} from '@shared/lib/utils/uuid';

const UUID = uuidv4();

export type Song = ApiSong & {
  id: string;
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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSongsList.fulfilled, (state, {payload}) => {
        adapter.removeAll(state);
        if (payload.data.length > 0) {
          adapter.upsertMany(
            state,
            payload.data.map(item => {
              return {
                id: UUID,
                ...item,
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
