import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ShowNewForm() {
  let navigate = useNavigate();

  const addShow = (newShow) => {
    axios
      .post(`${API}/show`, newShow)
      .then(
        () => {
          navigate(`/show`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [show, setShow] = useState({
    title: "",
    director: "",
    genre: "",
    release_date: "",
    season_count: "",
    episode_count: "",
    cast: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setShow({ ...show, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setShow({ ...show, is_favorite: !show.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addShow(show);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title:</label>
        <input
          id="name"
          value={show.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Ttile of Show"
          required
        />
        <label htmlFor="director">Director:</label>
        <input
          id="director"
          type="text"
          value={show.director}
          onChange={handleTextChange}
          placeholder="Director name"
          required
        />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          name="genre"
          value={show.genre}
          placeholder="Genre name"
          onChange={handleTextChange}
        />

        <label htmlFor="release_date">Release Date:</label>
        <input
          id="release_date"
          type="text"
          name="release_date"
          value={show.release_date}
          onChange={handleTextChange}
        />
        <label htmlFor="season_count">Season Date:</label>
        <input
          id="season_count"
          type="text"
          name="season_count"
          value={show.season_count}
          onChange={handleTextChange}
        />
        <label htmlFor="episode_count">Episode Count:</label>
        <input
          id="episode_count"
          type="text"
          name="episode_count"
          value={show.episode_count}
          onChange={handleTextChange}
        />
        <label htmlFor="cast">Cast:</label>
        <input
          id="cast"
          type="checkbox"
          name="cast"
          onChange={handleCheckboxChange}
          checked={show.cast}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={show.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default ShowNewForm;
