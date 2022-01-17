import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MoviesList } from './Movies.styled';

const Movies = ({ moviesData, link }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {moviesData.map(movie => (
        <li className="movies-item" key={movie.id}>
          <Link
            className="movies-link link"
            to={{
              pathname: `${link}/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </MoviesList>
  );
};

Movies.propTypes = {
  link: PropTypes.string.isRequired,
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default Movies;
