import React, { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ReviewForm({ showId, onReviewSubmit }) {
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/shows/${showId}/reviews`, {
        content: review,
      });
      // Assuming the API responds with the newly created review
      // You can update the reviews state here if needed
      console.log("Review added:", response.data);

      // Clear the review input after submission
      setReview("");
      // Notify the parent component that a new review has been added
      onReviewSubmit();
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div>
      <h4>Add Review</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
