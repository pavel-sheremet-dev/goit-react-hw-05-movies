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

export class Api {
  #API_KEY = 'f8153ff68108089411f00437d2c4307a';
  #BASE_API_URL = 'https://api.themoviedb.org/3';
  #END_POINTS = {
    TRENDING: '/trending/movie/week',
    search: '/search/movie',
    movieDetails: '/movie',
    movieCredits: '/credits',
    movieReviews: '/reviews',
  };

  language = 'en-US';

  fetchTrending = async (page = 1) => {
    const baseUrlParams = new URLSearchParams({
      api_key: this.#API_KEY,
      language: this.language,
      page,
    });

    const res = await fetch(
      `${this.#BASE_API_URL}${this.#END_POINTS.TRENDING}?${baseUrlParams}`,
    );
    return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
  };

  fetchByQuery = async (query, page = 1) => {
    const baseUrlParams = new URLSearchParams({
      api_key: this.#API_KEY,
      language: this.language,
      page,
      query,
    });

    const res = await fetch(
      `${this.#BASE_API_URL}${this.#END_POINTS.search}?${baseUrlParams}`,
    );
    return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
  };

  fetchDetails = async id => {
    const baseUrlParams = new URLSearchParams({
      api_key: this.#API_KEY,
      language: this.language,
    });

    const res = await fetch(
      `${this.#BASE_API_URL}${
        this.#END_POINTS.movieDetails
      }/${id}?${baseUrlParams}`,
    );
    return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
  };

  fetchCredits = async id => {
    const baseUrlParams = new URLSearchParams({
      api_key: this.#API_KEY,
      language: this.language,
    });

    const res = await fetch(
      `${this.#BASE_API_URL}${this.#END_POINTS.movieDetails}/${id}${
        this.#END_POINTS.movieCredits
      }?${baseUrlParams}`,
    );
    return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
  };

  fetchReviews = async id => {
    const baseUrlParams = new URLSearchParams({
      api_key: this.#API_KEY,
      language: this.language,
    });

    const res = await fetch(
      `${this.#BASE_API_URL}${this.#END_POINTS.movieDetails}/${id}${
        this.#END_POINTS.movieReviews
      }?${baseUrlParams}`,
    );
    return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
  };

  // getNormalizeData = ({ hits }) => {
  //   const normalizeHits = hits.map(
  //     ({ id, webformatURL, largeImageURL, tags }) => {
  //       const imageUrl = webformatURL ? webformatURL : this._imageNotFoundLink;
  //       const largeimageUrl = largeImageURL
  //         ? largeImageURL
  //         : this._imageNotFoundLink;
  //       return {
  //         id,
  //         webformatURL: imageUrl,
  //         largeImageURL: largeimageUrl,
  //         tags,
  //       };
  //     },
  //   );
  //   return normalizeHits;
  // };
}

export const normalizeQuery = query =>
  query.toLowerCase().trim().split(' ').join('+');
