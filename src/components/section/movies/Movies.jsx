const Movies = ({ moviesData }) => {
  return (
    <ul>
      {moviesData.map(movie => (
        <li key={movie.id}>
          <a href="#/">{movie.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
