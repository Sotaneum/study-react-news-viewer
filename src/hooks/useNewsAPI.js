import axios from 'axios';

import usePromise from './usePromise';

import { API_KEY } from '../constants/apiKey';

export default function (category) {
  return usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    try {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`,
      );
    } catch (e) {
      return [null, e.response, e.error];
    }
  }, [category]);
}
