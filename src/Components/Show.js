import { Link } from "react-router-dom";

function Show({ show }) {
  return (
    <tr>
      <td>
      <Link to={`/shows/${show.id}`}>{show.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}</Link>
      </td>
      <td>
      <Link to={`/shows/${show.id}`}>{show.name}</Link>
      </td>
      <td>
      <Link to={`/shows/${show.id}`}>{show.title}</Link>
      </td>
      <td>
        <Link to={`/shows/${show.id}`}>{show.review}</Link>
      </td>
    </tr>
  );
}

export default Show;
