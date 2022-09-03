import {createAsyncThunk} from '@reduxjs/toolkit';

import {getSongsList} from '@shared/api/songs';
import {AxiosResponse} from 'axios';

export const fetchSongsList = createAsyncThunk(
  'songs/fetchList',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getSongsList();

      return response;
    } catch (error) {
      return rejectWithValue(error as AxiosResponse);
    }
  },
);
