import HomePage from '../../views/HomePage';
import { Switch, Route } from 'react-router-dom';
import MoviesPage from '../../views/MoviesPage';
import MovieDetailsPage from '../../views/MovieDetailsPage';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
