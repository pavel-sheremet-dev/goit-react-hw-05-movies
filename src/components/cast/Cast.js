import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from '../../services/apiServices';
import notFoundImageurl from '../../images/broken.png';

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

        const normalizedData = [
          ...data.cast.map(castItem => ({
            ...castItem,
            profile_path: castItem.profile_path
              ? `https://image.tmdb.org/t/p/w500${castItem.profile_path}`
              : notFoundImageurl,
          })),
        ];

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
      {loading && <div>LOADING...</div>}
      {error && <div>{error.message}</div>}
      <ul>
        {cast.map(castItem => (
          <li key={castItem.id}>
            <img src={castItem.profile_path} alt="" width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
