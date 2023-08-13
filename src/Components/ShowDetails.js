import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Reviews from "../Pages/Review"; 
import ReviewForm from "./ReviewForm"; 
const API = process.env.REACT_APP_API_URL;

function ShowDetails() {
  const [show, setShow] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/shows/${id}`).then((response) => {
      setShow(response.data);
    });
  }, [id, navigate]);

  const deleteShow = () => {
    axios
      .delete(`${API}/shows/${id}`)
      .then(() => {
        navigate(`/shows`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleDelete = () => {
    deleteShow();
  };

  // Handler function for new review submission
  const handleReviewSubmit = () => {
    // Refresh show data after adding a review
    axios.get(`${API}/shows/${id}`).then((response) => {
      setShow(response.data);
    });
  };

  return (
    <article>
      <h3>
        {show.is_favorite ? <span>⭐️</span> : null} {show.title} By {show.director}
      </h3>
      <h6>{show.genre}</h6>
      <p>Time: {show.date}</p>
      <div className="showNavigation">
        <div>
          <Link to="/shows">
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/shows/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>

      
      <ReviewForm showId={id} onReviewSubmit={handleReviewSubmit} />

      
      <Reviews reviews={show.reviews} />
    </article>
  );
}

export default ShowDetails;
