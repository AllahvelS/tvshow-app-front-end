import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Reviews from "./Reviews"; 

const API = process.env.REACT_APP_API_URL;

function ShowDetails() {
  const [show, setShow] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  
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


useEffect(() => {
  axios
    .get(`${API}/shows/${id}`)
    .then((response) => {
      console.log(response.data);
      setShow(response.data);
    })
  .catch((c) => {
    console.warn("catch", c);
  });
}, [id, API]);

  return (
    <article>
      <img className="showImage" src={show.image} alt="Show image"></img>
      <h3>
        {show.is_favorite ? <span>⭐️</span> : null} {show.title} By {show.director}
      </h3>
      <h5>Released: {show.release_date}</h5>
      <h5>Genre: {show.genre}</h5>
      <h5>Seasons:  {show.season_count}</h5>
      <h5>Episodes: {show.episode_count}</h5>
      <h5>Cast: {show.cast_members}</h5>
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
      <Reviews/>
    </article>
  );
}

export default ShowDetails;