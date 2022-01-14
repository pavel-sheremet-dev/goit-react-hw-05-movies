import { Link } from 'react-router-dom';

const Movies = ({ moviesData }) => {
  return (
    <ul>
      {moviesData.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
