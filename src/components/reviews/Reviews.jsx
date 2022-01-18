import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews, normalizeReviews } from '../../services/apiServices';
import Loader from '../loader/Loader';
import { ReviewsStyled } from './Reviews.styled';
import { toast } from 'react-toastify';

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
        toast.error('Ooops. Something went wrong...');
        setError('Ooops. Something went wrong...');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <ReviewsStyled>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      {!reviews.length && !loading ? (
        <p className="paragraph">No reviews</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li className="review" key={review.id}>
              <p className="paragraph">
                <span className="bold-span">Reviewer:{'\u00A0'}</span>
                <span>{review.author}</span>
              </p>
              <p className="paragraph">{review.content}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </ReviewsStyled>
  );
};

export default Reviews;
