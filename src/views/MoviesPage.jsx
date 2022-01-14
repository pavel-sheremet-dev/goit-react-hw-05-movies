import React, { useState, useEffect } from 'react';
import Movies from '../components/movies/Movies';

import SearchForm from '../components/searchForm/SearchForm';
import Section from '../components/section/Section';
import { fetchByQuery } from '../services/apiServices';

const MoviesPage = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getQuery = query => {
    setQuery(query);
  };

  useEffect(() => {
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
      {loading && <div>LOADING...</div>}
      {error && <div>{error.message}</div>}
      <Section titleLevel="h2" title="Поиск фильмов">
        <SearchForm getQuery={getQuery} query={query} />
        {query && <Movies moviesData={movies} />}
      </Section>
    </>
  );
};

export default MoviesPage;
