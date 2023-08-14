import ReviewForm from "./ReviewForm";
import { useState } from "react";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      <div>
        <h3>{review.title}</h3>
        <h4>{review.reviewer}</h4>
        <span>Rating: {review.rating}</span>
        <p>{review.content}</p>
      </div>
      <div className="button-container">
        <button onClick={toggleView}>Edit this review</button>
        <button onClick={() => handleDelete(review.id)}>Delete</button>
      </div>
      {viewEditForm && (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Review;
