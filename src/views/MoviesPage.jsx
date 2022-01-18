import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loader from '../components/loader/Loader';
import Movies from '../components/movies/Movies';
import SearchForm from '../components/searchForm/SearchForm';
import Section from '../components/section/Section';
import { navRoutes } from '../routes/routes';
import { fetchByQuery } from '../services/apiServices';

const MoviesPage = () => {
  const location = useLocation();
  const [query, setQuery] = useState(() => location.search.substring(1));
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const getQuery = query => {
    history.push({
      ...location,
      search: query,
    });
  };

  useEffect(() => {
    setQuery(location.search.substring(1));
  }, [location]);

  useEffect(() => {
    if (!query) return;
    setMovies([]);
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError('Ooops. Something went wrong...');
        toast.error('Ooops. Something went wrong...');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const isNotFound = !loading && !movies.length && query;
  const resolve = !!movies.length && !loading;

  return (
    <>
      <Section titleLevel="h2" title="Поиск фильмов">
        <SearchForm getQuery={getQuery} query={query} />
        {loading && <Loader />}
        {resolve && <Movies moviesData={movies} link={navRoutes.movies.path} />}
        {isNotFound && <div>Movies not found</div>}
        {error && <div>{error}</div>}
      </Section>
    </>
  );
};

export default MoviesPage;
