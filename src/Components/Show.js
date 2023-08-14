import { Link } from "react-router-dom";
import React from "react";

function Show({ show }) {
  // Convert the timestamp to a Date object
  const releaseDate = new Date(show.release_date);

  // Get year, month, and day from the release date
  const year = releaseDate.getFullYear();
  const month = (releaseDate.getMonth() + 1).toString().padStart(2, "0");
  const day = releaseDate.getDate().toString().padStart(2, "0");

  // Format the release date to display as YYYY-MM-DD
  const formattedReleaseDate = `${year}-${month}-${day}`;

  return (
    <tr className="show-row">
      <td>
        <Link to={`/shows/${show.id}`}>
          {show.is_favorite ? <span className="fire">🔥</span> : null}
        </Link>
      </td>
      <td>
        <Link to={`/shows/${show.id}`}>{show.title}</Link>
      </td>
      <td>
        <Link to={`/shows/${show.id}`}>{show.director}</Link>
      </td>
      <td>
        <h3>{formattedReleaseDate}</h3>
      </td>
      <td>
        <h3>{show.season_count}</h3>
      </td>
      <td>
        <h3>{show.episode_count}</h3>
      </td>
    </tr>
  );
}

export default Show;
