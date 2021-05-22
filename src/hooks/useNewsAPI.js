import axios from 'axios';

import usePromise from './usePromise';

import { NEWSAPI_ORG_API } from '../constants/apiKey';

export default function (category) {
  return usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    try {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${NEWSAPI_ORG_API}`,
      );
    } catch (e) {
      return [null, e.response, e.error];
    }
  }, [category]);
}
