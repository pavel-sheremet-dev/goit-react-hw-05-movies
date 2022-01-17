import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews, normalizeReviews } from '../../services/apiServices';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        setLoading(true);
        const data = await fetchReviews(movieId);

        const normalizedReviews = normalizeReviews(data.results);

        setReviews(normalizedReviews);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      {loading && <div>LOADING...</div>}
      {error && <div>{error.message}</div>}
      {!reviews.length ? (
        <p>No reviews</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
