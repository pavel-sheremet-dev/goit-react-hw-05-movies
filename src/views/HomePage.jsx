import { useEffect, useState } from 'react';
import { navRoutes } from '../routes/routes';
import { toast } from 'react-toastify';

import Movies from '../components/movies/Movies';
import Section from '../components/section/Section';
import { fetchTrending } from '../services/apiServices';
import Loader from '../components/loader/Loader';

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
        setError('Ooops. Something went wrong...');
        toast.error('Ooops. Something went wrong...');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const isNotFound = !loading && !movies.length;
  const resolve = !!movies.length && !loading;

  return (
    <>
      <Section titleLevel="h1" title="Популярные фильмы">
        {loading && <Loader />}
        {error && <div>{error}</div>}
        {resolve && <Movies moviesData={movies} link={navRoutes.movies.path} />}
        {isNotFound && <div>Movies not found</div>}
      </Section>
    </>
  );
};

export default HomePage;
