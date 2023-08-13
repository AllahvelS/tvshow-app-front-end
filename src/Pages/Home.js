import React from "react";
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div>
          <h1>Welcome to the TV Show App</h1>
          <p>Discover and explore your favorite TV shows!</p>
          <Link to="/shows"> 
            <button className="button">Vamos!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
