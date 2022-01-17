import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits, normalizeCast } from '../../services/apiServices';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        setLoading(true);
        const data = await fetchCredits(movieId);

        const normalizedData = normalizeCast(data.cast);

        setCast(normalizedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      {loading && <div>ПАПАМ...</div>}
      {error && <div>{error.message}</div>}
      <ul>
        {cast.map(castItem => (
          <li key={castItem.id}>
            <img src={castItem.profile_path} alt="" width="200" />
            <p>Name: {castItem.name}</p>
            <p>Character: {castItem.character}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
