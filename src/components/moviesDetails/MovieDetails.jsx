import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import { movieAddInfoRoutes, navRoutes } from '../../routes/routes';

const MovieDetails = ({ movieDetails }) => {
  const { title, release_date, overview, vote_average, poster_path } =
    movieDetails;

  const match = useRouteMatch();
  const location = useLocation();

  return (
    <>
      <div>{title}</div>
      <div>{release_date}</div>
      <div>{overview}</div>
      <div>{vote_average}</div>
      <img src={poster_path} alt={`poster of ${title}`} width="200" />
      <hr />
      <ul>
        {Object.keys(movieAddInfoRoutes).map(key => {
          const { title, path, id } = movieAddInfoRoutes[key];
          return (
            <li key={id}>
              <NavLink
                to={{
                  pathname: `${match.url}${path}`,
                  state: {
                    from: location.state?.from ?? navRoutes.movies.path,
                  },
                }}
              >
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <hr />
    </>
  );
};

export default MovieDetails;
