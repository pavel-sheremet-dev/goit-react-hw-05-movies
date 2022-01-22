import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { navRoutes, movieAddInfoRoutes, dinamic } from '../../routes/routes';
import Loader from '../loader/Loader';

const { home, movies } = navRoutes;
const { cast, reviews } = movieAddInfoRoutes;

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

const Cast = lazy(() =>
  import('../cast/Cast' /* webpackChunkName: "cast-component" */),
);

const Reviews = lazy(() =>
  import('../reviews/Reviews' /* webpackChunkName: "reviews-component" */),
);

const NotFoundPage = lazy(() =>
  import('../../views/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

const Main = () => {
  return (
    <main>
      <Suspense fallback={<Loader chunk={true} />}>
        <Routes>
          <Route path="/" element={<Navigate to={home.path} />} />
          <Route path={home.path} element={<HomePage />} />
          <Route path={movies.path} element={<MoviesPage />} />
          <Route
            path={`${movies.path}/${dinamic.id.path}`}
            element={<MovieDetailsPage />}
          >
            <Route
              path={cast.path}
              element={
                <Suspense fallback={<Loader chunk={true} />}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path={reviews.path}
              element={
                <Suspense fallback={<Loader chunk={true} />}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
          <Route
            path={`${movies.path}/${dinamic.id.path}/*`}
            element={<Navigate to={home.absolutePath} />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
