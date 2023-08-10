import { Link } from "react-router-dom";

export default function NavBar() {
    return(
    <nav>
      <h1>
        <Link to="/shows">Shows</Link>
      </h1>
      <button>
        <Link to="/shows/new">New Show</Link>
      </button>
    </nav>
  );
}