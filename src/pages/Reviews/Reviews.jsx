import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'api/fetchFromApi';
import ReviewsRender from 'components/ReviewsRender/ReviewsRender';

function Reviews() {
  const [movieReviewsData, setMovieReviewsData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviewsById(movieId).then(response =>
      setMovieReviewsData(response)
    );
  }, [movieId]);

  return (
    <>{movieReviewsData && <ReviewsRender reviewsData={movieReviewsData} />}</>
  );
}

export default Reviews;
