# News Viewer

## 정보

- [리액트를 다루는 기술](https://search.daum.net/search?w=bookpage&bookId=5056576&tab=introduction&DA=LB2&q=%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC%20%EB%8B%A4%EB%A3%A8%EB%8A%94%20%EA%B8%B0%EC%88%A0) 도서를 공부하면서 진행한 실습 예제입니다.

## 설치 방법

## 프로젝트 설정하기

- 프로젝트에 필요한 라이브러리를 설치합니다.

```bash
npm install --registry https://registry.npmjs.com
```

- API Key를 교체합니다.

`./src/components/NewsList.js` 파일에서 `API KEY INSERT HERE` 부분을 `https://newsapi.org/` 페이지에 로그이해서 받은 `key` 값으로 교체합니다.

```js
const NewsList = ({ category }) => {
  ...
    const apiKey = 'API KEY INSERT HERE';
  ...
```

## 프로젝트 실행하기

```bash
yarn start
```

## 프로젝트 빌드하기

```bash
yarn build
```

## 프로젝트 배포하기

```bash
yarn deploy
```
