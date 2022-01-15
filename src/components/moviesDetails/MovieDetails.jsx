import { NavLink, useRouteMatch } from 'react-router-dom';
import { movieAddInfoRoutes } from '../../routes/routes';

const MovieDetails = ({ movieDetails }) => {
  const { title, release_date, overview, vote_average, poster_path } =
    movieDetails;

  const match = useRouteMatch();

  return (
    <>
      <div>{title}</div>
      <div>{release_date}</div>
      <div>{overview}</div>
      <div>{vote_average}</div>
      <img src={poster_path} alt={`poster of ${title}`} width="200" />
      <hr />
      <ul>
        {movieAddInfoRoutes.map(({ title, path, id }) => (
          <li key={id}>
            <NavLink to={`${match.url}${path}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
};

export default MovieDetails;
