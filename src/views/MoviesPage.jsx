import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Movies from '../components/movies/Movies';

import SearchForm from '../components/searchForm/SearchForm';
import Section from '../components/section/Section';
import { navRoutes } from '../routes/routes';
import { fetchByQuery } from '../services/apiServices';

const MoviesPage = () => {
  const location = useLocation();
  const [query, setQuery] = useState(() => location.search.substring(1));
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const getQuery = query => {
    history.push({
      ...location,
      search: query,
    });
  };

  useEffect(() => {
    console.log(`location`, location);
    setQuery(location.search.substring(1));
  }, [location]);

  useEffect(() => {
    console.log('useEff');
    if (!query) return;
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <>
      <Section titleLevel="h2" title="Поиск фильмов">
        <SearchForm getQuery={getQuery} query={query} />
        {loading && <div>LOADING...</div>}
        {error && <div>{error.message}</div>}
        {!!movies.length && query && (
          <Movies moviesData={movies} link={navRoutes.movies.path} />
        )}
      </Section>
    </>
  );
};

export default MoviesPage;
