import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MoviesList } from './Movies.styled';

const Movies = ({ moviesData, absolutePath }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {moviesData.map(movie => (
        <li className="movies-item" key={movie.id}>
          <Link
            className="movies-link link"
            to={`${absolutePath}/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </MoviesList>
  );
};

Movies.propTypes = {
  absolutePath: PropTypes.string.isRequired,
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default Movies;
