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
// import Cast from '../components/cast/Cast';
// import Reviews from '../components/reviews/Reviews';

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
  const [movieDetails, setMovieDetails] = useState({});
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
        setError(error);
        setTimeout(() => {
          history.replace(navRoutes.movies.path);
        }, 0);
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
      <button type="button" onClick={handleClick}>
        Назад к фильмам
      </button>
      <Section titleLevel="h3" title="Описание фильма">
        {loading && <div>LOADING...</div>}
        {error && <div>{error.message}</div>}
        <MovieDetails movieDetails={movieDetails} />

        <Suspense fallback={<div>LOADING...</div>}>
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
