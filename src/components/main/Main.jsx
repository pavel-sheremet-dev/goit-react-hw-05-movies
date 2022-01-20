import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { navRoutes } from '../../routes/routes';
import Loader from '../loader/Loader';

const { home, movies } = navRoutes;

const HomePage = lazy(() =>
  import('../../views/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('../../views/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const NotFoundPage = lazy(() =>
  import('../../views/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

const Main = () => {
  return (
    <main>
      <Suspense fallback={<Loader chunk={true} />}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to={home.path} />} />
          <Route path={home.path} exact>
            <HomePage />
          </Route>
          <Route path={movies.path} exact>
            <MoviesPage />
          </Route>
          <Route path={`${movies.path}/:movieId`}>
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
