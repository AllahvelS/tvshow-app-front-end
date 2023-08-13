import axios from "axios";
import { useState, useEffect } from "react";
import Show from "./Show";

const API = process.env.REACT_APP_API_URL;

function Shows() {
  const [shows, setShow] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/shows`)
      .then((response) => setShow(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  
  return (
    <div className="Shows">
      <section>
        <table>
          <thead>
            <tr>
              <th>Fav</th>
              <th>Show</th>
              <th>Director</th>
              <th>Release Date</th>
              <th>Season Count</th>
              <th>Episode Count</th>
              <th>Cast</th>
            </tr>
          </thead>
          <tbody>
            {shows.map((show) => {
              return <Show key={show.id} show={show} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Shows;