import {AxiosResponse} from 'axios';
import {RootState} from '@entities/store';

interface ErrorResponse {
  message: string;
}

export interface ThunkApiConfig {
  rejectValue: AxiosResponse<ErrorResponse>;
  state: RootState;
}
