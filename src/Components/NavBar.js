// NavBar.js
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <h1>
        <Link to="/shows">Shows</Link>
      </h1>
      <h1>
        <Link to="/reviews">Reviews</Link> 
      </h1>
      <button>
        <Link to="/shows/new">New Show</Link>
      </button>
    </nav>
  );
}
