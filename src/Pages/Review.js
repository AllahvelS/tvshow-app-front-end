import React from "react";

function Reviews({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.user}</strong> - {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
