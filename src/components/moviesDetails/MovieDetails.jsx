import { lazy, Suspense } from 'react';

import PropTypes from 'prop-types';
import {
  NavLink,
  useRouteMatch,
  useLocation,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { movieAddInfoRoutes, navRoutes } from '../../routes/routes';
import Box from '../box/Box';
import Loader from '../loader/Loader';
import { MovieCardStyled } from './MovieDetails.styled';

const Cast = lazy(() =>
  import('../cast/Cast' /* webpackChunkName: "cast-component" */),
);

const Reviews = lazy(() =>
  import('../reviews/Reviews' /* webpackChunkName: "reviews-component" */),
);

const { cast, reviews } = movieAddInfoRoutes;

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

      <Suspense fallback={<Loader chunk={true} />}>
        <Switch>
          <Route path={`${match.path}${cast.path}`}>
            <Cast />
          </Route>
          <Route path={`${match.path}${reviews.path}`}>
            <Reviews />
          </Route>
          <Route
            path={`${match.path}`}
            render={() => (
              <Redirect
                // to={match.url}
                to={{
                  pathname: `${match.url}`,
                  state: {
                    from: location.state?.from,
                  },
                }}
              />
            )}
          />
        </Switch>
      </Suspense>
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
