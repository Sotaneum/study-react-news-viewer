import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
import { ERROR_MESSAGES } from '../constants';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    const apiKey = 'API KEY INSERT HERE';
    try {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`,
      );
    } catch (e) {
      return [null, e.response, e.error];
    }
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기 중 ...</NewsListBlock>;
  }

  if (error) {
    const code = error?.response?.data?.code || 'notFountError';
    return (
      <NewsListBlock>
        {ERROR_MESSAGES[code].split('\n').map((msg) => {
          return (
            <>
              <br />
              {msg}
            </>
          );
        })}
      </NewsListBlock>
    );
  }

  if (!response) {
    return null;
  }

  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
