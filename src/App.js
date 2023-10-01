import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photo from "./pages/photo";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Menu from "./components/menu/menu";
import { useEffect, useState } from "react";
function App() {
  const [isSmall, setSmall] = useState(true);
  const [favourites, setFavourites] = useState([]);

  const [currentPhoto, setCurrentPhoto] = useState({});
  const [query, setQuery] = useState("");
  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <Router>
      <Menu isSmall={isSmall} query={setQuery} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              search={setSmall}
              setCurrentPhoto={setCurrentPhoto}
              query={query}
            />
          }
        />

        <Route
          path="/photo"
          element={
            <Photo
              search={setSmall}
              image={currentPhoto}
              setFavourites={setFavourites}
              favs={favourites}
            />
          }
        />

        <Route
          path="/favourites"
          element={
            <Favourites
              favs={favourites}
              search={setSmall}
              setCurrentPhoto={setCurrentPhoto}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
