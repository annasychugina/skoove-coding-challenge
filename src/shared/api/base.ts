import axios from 'axios';
import {API_URL} from '../config';

// can transfer accessToken here
export const apiInstance = axios.create({
  baseURL: API_URL,
});
