import { useEffect, useState } from 'react';
import { navRoutes } from '../routes/routes';

import Movies from '../components/movies/Movies';
import Section from '../components/section/Section';
import { fetchTrending } from '../services/apiServices';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchTrending();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <Section titleLevel="h1" title="Популярные фильмы">
        {loading && <div>LOADING...</div>}
        {error && <div>{error.message}</div>}
        {!!movies.length ? (
          <Movies moviesData={movies} link={navRoutes.movies.path} />
        ) : (
          <div>Movies not found</div>
        )}
      </Section>
    </>
  );
};

export default HomePage;
