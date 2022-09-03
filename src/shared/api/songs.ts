import {apiInstance} from './base';
import {ApiSong} from '@shared/api/models';

const BASE_URL =
  '/Learnfield-GmbH/CodingChallenge/master/react%20native/simple%20audio%20player/data/manifest.json';

export type GetSongsListParams = {};

export const getSongsList = async (
  params?: GetSongsListParams,
): Promise<{data: ApiSong[]}> => {
  const result = await apiInstance.get(BASE_URL, {params});
  return result.data;
};
