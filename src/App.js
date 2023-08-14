// DEPENDENCIES
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import AllReviews from "./Pages/AllReviews";

// COMPONENTS
import NavBar from "./Components/NavBar";
// import AllReviews from "./Pages/AllReviews";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Index />} />
            <Route path="/shows/new" element={<New />} />
            <Route exact path="/shows/:id" element={<Show />} />
            <Route path="/shows/:id/edit" element={<Edit />} />
            <Route path="/reviews" element={<AllReviews />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

