import notFoundImageurl from '../images/broken.png';

const API_KEY = 'f8153ff68108089411f00437d2c4307a';
const BASE_API_URL = 'https://api.themoviedb.org/3';
const END_POINTS = {
  TRENDING: '/trending/movie/week',
  search: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};
const language = 'en-US';

export const fetchTrending = async (page = 1) => {
  const baseUrlParams = new URLSearchParams({
    api_key: API_KEY,
    language,
    page,
  });

  const res = await fetch(
    `${BASE_API_URL}${END_POINTS.TRENDING}?${baseUrlParams}`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export const fetchByQuery = async (query, page = 1) => {
  const baseUrlParams = new URLSearchParams({
    api_key: API_KEY,
    language,
    page,
    query,
  });

  const res = await fetch(
    `${BASE_API_URL}${END_POINTS.search}?${baseUrlParams}`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export const fetchDetails = async id => {
  const baseUrlParams = new URLSearchParams({
    api_key: API_KEY,
    language,
  });

  const res = await fetch(
    `${BASE_API_URL}${END_POINTS.movieDetails}/${id}?${baseUrlParams}`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export const fetchCredits = async id => {
  const baseUrlParams = new URLSearchParams({
    api_key: API_KEY,
    language,
  });

  const res = await fetch(
    `${BASE_API_URL}${END_POINTS.movieDetails}/${id}${END_POINTS.movieCredits}?${baseUrlParams}`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export const fetchReviews = async (id, page = 1) => {
  const baseUrlParams = new URLSearchParams({
    api_key: API_KEY,
    language,
    page,
  });

  const res = await fetch(
    `${BASE_API_URL}${END_POINTS.movieDetails}/${id}${END_POINTS.movieReviews}?${baseUrlParams}`,
  );
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

export const normalizeMovieDetails = data => ({
  ...data,
  poster_path: data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : notFoundImageurl,
});

export const normalizeQuery = query =>
  query.toLowerCase().trim().split(' ').join('+');

export const normalizeCast = castArray => [
  ...castArray.map(castItem => ({
    ...castItem,
    profile_path: castItem.profile_path
      ? `https://image.tmdb.org/t/p/w500${castItem.profile_path}`
      : notFoundImageurl,
  })),
];

export const normalizeReviews = reviewsArray =>
  reviewsArray.map(result => ({
    ...result,
    content: result.content.replace(/<\/?[^>]+(>|$)/g, ''),
  }));
