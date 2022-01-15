import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDetails } from '../services/apiServices';
import Section from '../components/section/Section';
import MovieDetails from '../components/moviesDetails/MovieDetails';
import Cast from '../components/cast/Cast';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const match = useRouteMatch();

  useEffect(() => {
    const fetchMovieDedails = async () => {
      try {
        setLoading(true);
        const data = await fetchDetails(movieId);
        const normalizeData = {
          ...data,
          poster_path: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        };
        setMovieDetails(normalizeData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDedails();
  }, [movieId]);

  return (
    <>
      <button type="button">Назад к фильмам</button>
      <Section titleLevel="h3" title="Описание фильма">
        {loading && <div>LOADING...</div>}
        {error && <div>{error.message}</div>}
        <MovieDetails movieDetails={movieDetails} />

        <Switch>
          <Route path={`${match.path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${match.path}/review`}>
            <div>REVIEW</div>
          </Route>
        </Switch>
      </Section>
    </>
  );
};

export default MovieDetailsPage;
