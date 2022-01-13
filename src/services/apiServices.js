export class Api {
  #API_KEY = 'f8153ff68108089411f00437d2c4307a';
  #BASE_API_URL = 'https://api.themoviedb.org/3';
  #END_POINTS = {
    TRENDING: '/trending/movie/week',
    search: '/search/movie',
    movieDetails: '/movie/{movie_id}',
    movieCredits: '/movie/{movie_id}/credits',
    movieReviews: '/movie/{movie_id}/reviews',
  };

  /*
/trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
/search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
/movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
/movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
/movies/get-movie-reviews запрос обзоров для страницы кинофильма.
  */

  firstPage = 1;
  lang = 'en-US';

  fetchTrending = async (page = 1) => {
    const baseUrlParams = new URLSearchParams({
      api_key: this.#API_KEY,
      language: this.lang,
      page: page,
    });

    const res = await fetch(
      `${this.#BASE_API_URL}/${this.#END_POINTS.TRENDING}/${baseUrlParams}`,
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
