export const ERROR_MESSAGES = {
  corsNotAllowed:
    'API 서버 정책에 따라 localhost에서만 정상 동작합니다.\nhttps://github.com/Sotaneum/study-react-news-viewer 에서 clone한 다음 README 절차에 따라 시도해 주세요 : )',
  apiKeyInvalid:
    'API Key가 올바르지 않습니다.\nhttps://github.com/Sotaneum/study-react-news-viewer 에서 README를 참고해주세요.',
  notFountError:
    '알 수 없는 에러가 발생했습니다.\n접근 방식에 대해 https://github.com/Sotaneum/study-react-news-viewer/issues 에 남겨주시면 확인 후 해결해보겠습니다.',
};

export const NOT_FOUNT_ERROR = 'notFountError';

export const CATEGORIES = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];
