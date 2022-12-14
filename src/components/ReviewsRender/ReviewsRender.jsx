import React from 'react';

function ReviewsRender({ reviewsData }) {
  const reviews = reviewsData.results;
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            const { id, author, content } = review;

            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews found!</p>
      )}
    </>
  );
}


export default ReviewsRender;
