import { Link, useLocation } from 'react-router-dom';

const Movies = ({ moviesData, link }) => {
  const location = useLocation();

  return (
    <ul>
      {moviesData.map(movie => (
        <li key={movie.id}>
          <Link
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
    </ul>
  );
};

export default Movies;
