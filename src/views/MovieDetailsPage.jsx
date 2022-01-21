import { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { fetchDetails, normalizeMovieDetails } from '../services/apiServices';
import Section from '../components/section/Section';
import MovieDetails from '../components/moviesDetails/MovieDetails';
import { navRoutes } from '../routes/routes';
import Loader from '../components/loader/Loader';
import Button from '../components/button/Button';
import { toast } from 'react-toastify';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fetchMovieDedails = async () => {
      try {
        setLoading(true);
        const data = await fetchDetails(movieId);
        const normalizeData = normalizeMovieDetails(data);
        setMovieDetails(normalizeData);
        setLoading(false);
      } catch (error) {
        setError('Ooops. Something went wrong... Try use Searh form');
        toast.error(`The movie was not found. Use Searh`);
        console.log(error);
        history.replace(navRoutes.movies.path);
      } finally {
        // setLoading(false);
      }
    };
    fetchMovieDedails();
  }, [history, movieId]);

  const handleClick = () => {
    history.push(location.state?.from ?? navRoutes.home.path);
  };

  return (
    <>
      <Section titleLevel="h3" title="Описание фильма">
        <Button onClick={handleClick} pl={10} pt={10} pr={10} pb={10} mb={20}>
          Назад к фильмам
        </Button>

        {loading && <Loader />}
        {error && <div>{error}</div>}
        {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      </Section>
    </>
  );
};

export default MovieDetailsPage;
