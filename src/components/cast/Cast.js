import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits, normalizeCast } from '../../services/apiServices';
import Box from '../box/Box';
import Loader from '../loader/Loader';
import { CastStyled } from './Cast.styled';

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
        setError('Ooops. Something went wrong...');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <CastStyled>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <ul className="cast-list">
        {cast.map(castItem => (
          <li className="actor" key={castItem.id}>
            <img
              className="actor-img"
              src={castItem.profile_path}
              alt={`${castItem.name} portrait`}
            />
            <Box ml={10}>
              <p className="paragraph">
                <span className="bold-span">Name:{'\u00A0'}</span>
                <span>{castItem.name}</span>
              </p>
              <p className="paragraph">
                <span className="bold-span">Character:{'\u00A0'}</span>
                <span>{castItem.character}</span>
              </p>
            </Box>
          </li>
        ))}
      </ul>
    </CastStyled>
  );
};

export default Cast;
