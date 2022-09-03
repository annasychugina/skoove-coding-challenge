import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import {RootState} from '@entities/types';

const rootReducer = combineReducers<RootState>({});

export const store = configureStore({
  reducer: rootReducer,
});
