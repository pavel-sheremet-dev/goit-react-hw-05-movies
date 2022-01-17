import PropTypes from 'prop-types';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import { movieAddInfoRoutes, navRoutes } from '../../routes/routes';
import Box from '../box/Box';
import { MovieCardStyled } from './MovieDetails.styled';

const MovieDetails = ({ movieDetails }) => {
  const { title, release_date, overview, vote_average, poster_path } =
    movieDetails;

  const match = useRouteMatch();
  const location = useLocation();

  return (
    <MovieCardStyled>
      <div className="head">
        <img className="image" src={poster_path} alt={`poster of ${title}`} />
        <Box>
          <h3 className="title">{title}</h3>
          <p className="paragraph">
            <span className="bold-span">Release date:{'\u00A0'}</span>
            <span className="text-span">{release_date}</span>
          </p>
          <p className="paragraph">
            <span className="bold-span">Overview:{'\u00A0'}</span>
            <span className="text-span">{overview}</span>
          </p>
          <p className="paragraph">
            <span className="bold-span">Vote average:{'\u00A0'}</span>
            <span className="text-span">{vote_average}</span>
          </p>
        </Box>
      </div>
      <hr />
      <ul className="nav-list">
        {Object.keys(movieAddInfoRoutes).map(key => {
          const { title, path, id } = movieAddInfoRoutes[key];
          return (
            <li key={id} className="nav-item">
              <NavLink
                className="nav-link link"
                to={{
                  pathname: `${match.url}${path}`,
                  state: {
                    from: location.state?.from ?? navRoutes.movies.path,
                  },
                }}
                activeClassName="nav-link-active"
              >
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <hr />
    </MovieCardStyled>
  );
};

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
