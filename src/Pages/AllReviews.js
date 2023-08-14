import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review from "../Components/Review";

const API = process.env.REACT_APP_API_URL;

function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [show, setShow] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/shows/reviews`)
      .then((response) => setReviews(response.data))
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/shows/${id}`)
      .then((response) => {
        console.log(response.data);
        setShow(response.data);
      })
      .catch((error) => {
        console.warn("Error fetching show:", error);
      });
  }, [id]);

  return (
    <div className="AllReviews">
      <h2>Reviews</h2>
      <div >
        {reviews.map((review) => (
          <div className="review-box" key={review.id} >
            <Review review={review} />

            {/* Check if the review's show_id matches the current show's id */}
            {review.show_id === show.id && (
              <img src={show.image} alt="Show Picture" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllReviews;