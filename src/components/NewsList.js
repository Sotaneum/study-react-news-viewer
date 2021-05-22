import React, { Fragment } from 'react';
import styled from 'styled-components';

import NewsItem from './NewsItem';

import useNewsAPI from '../hooks/useNewsAPI';

import { ERROR_MESSAGES, NOT_FOUNT_ERROR } from '../constants';

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
  const [loading, response, error] = useNewsAPI(category);

  if (loading) {
    return <NewsListBlock>대기 중 ...</NewsListBlock>;
  }

  if (error) {
    const code = error?.response?.data?.code || NOT_FOUNT_ERROR;
    return (
      <NewsListBlock>
        {ERROR_MESSAGES[code].split('\n').map((msg, idx) => {
          return (
            <Fragment key={idx}>
              <br />
              {msg}
            </Fragment>
          );
        })}
      </NewsListBlock>
    );
  }

  return response ? (
    <NewsListBlock>
      {response?.data?.articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  ) : (
    <></>
  );
};

export default NewsList;
