import React, { useState, useEffect } from "react";
import axios from "axios";
import Show from "./Show";

const API = process.env.REACT_APP_API_URL;

function Shows() {
  const [shows, setShows] = useState([]);
  const [sortBy, setSortBy] = useState("release_date"); // Default sorting by release date

  useEffect(() => {
    axios
      .get(`${API}/shows`)
      .then((response) => setShows(response.data))
      .catch((error) => console.error("Error fetching shows:", error));
  }, []);

  // Function to handle sorting by selected section
  const handleSort = (section) => {
    setSortBy(section);
  };

  // Sort the shows based on the selected section
  const sortedShows = shows.slice().sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "director") {
      return a.director.localeCompare(b.director);
    } else if (sortBy === "season_count") {
      return a.season_count - b.season_count;
    } else if (sortBy === "episode_count") {
      return a.episode_count - b.episode_count;
    } else if (sortBy === "is_favorite") {
      return b.is_favorite - a.is_favorite;
    } else {
      return new Date(a.release_date) - new Date(b.release_date);
    }
  });

  return (
    <div className="Shows">
      <section>
        <div>
          <label htmlFor="sortSelect">Sort by: </label>
          <select id="sortSelect" value={sortBy} onChange={(e) => handleSort(e.target.value)}>
            <option value="release_date">Release Date</option>
            <option value="title">Title</option>
            <option value="director">Director</option>
            <option value="season_count">Season Count</option>
            <option value="episode_count">Episode Count</option>
            <option value="is_favorite">Favorite</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Fav</th>
              <th>Show</th>
              <th>Director</th>
              <th>Release Date</th>
              <th>Season Count</th>
              <th>Episode Count</th>
            </tr>
          </thead>
          <tbody>
            {sortedShows.map((show) => (
              <Show key={show.id} show={show} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Shows;
