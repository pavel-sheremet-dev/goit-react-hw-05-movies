import { useEffect, useState, lazy, Suspense } from 'react';
import {
  useParams,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { fetchDetails, normalizeMovieDetails } from '../services/apiServices';
import Section from '../components/section/Section';
import MovieDetails from '../components/moviesDetails/MovieDetails';
import { movieAddInfoRoutes, navRoutes } from '../routes/routes';
import Loader from '../components/loader/Loader';
import Button from '../components/button/Button';
import { toast } from 'react-toastify';

const Cast = lazy(() =>
  import('../components/cast/Cast' /* webpackChunkName: "cast-component" */),
);

const Reviews = lazy(() =>
  import(
    '../components/reviews/Reviews' /* webpackChunkName: "reviews-component" */
  ),
);

const { cast, reviews } = movieAddInfoRoutes;

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fetchMovieDedails = async () => {
      try {
        setLoading(true);
        const data = await fetchDetails(movieId);
        const normalizeData = normalizeMovieDetails(data);
        setMovieDetails(normalizeData);
      } catch (error) {
        setError('Ooops. Something went wrong... Try use Searh form');
        toast.error('Ooops. Something went wrong...Try use Search form');
        console.log(error);
        setTimeout(() => {
          history.replace(navRoutes.movies.path);
        }, 2000);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDedails();
  }, [history, movieId]);

  const handleClick = () => {
    history.push(location.state?.from ?? navRoutes.movies.path);
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

        <Suspense fallback={<Loader chunk={true} />}>
          <Switch>
            <Route path={`${match.path}${cast.path}`}>
              <Cast />
            </Route>
            <Route path={`${match.path}${reviews.path}`}>
              <Reviews />
            </Route>
          </Switch>
        </Suspense>
      </Section>
    </>
  );
};

export default MovieDetailsPage;
