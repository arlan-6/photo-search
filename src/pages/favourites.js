import React, { useEffect, useState } from "react";
import GalleryCard from "../components/galleryCard/galleryCard";
import { useNavigate } from "react-router-dom";
import "./favourites.css";
function Favourites({ search, favs, setCurrentPhoto }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    search(true);
    setImages(favs);
  }, []);

  let navigate = useNavigate();
  const routeChangePhoto = () => {
    let path = `/photo`;
    navigate(path, { replace: true });
  };

  return (
    <div>
      <h1 className="text-center">Favourite </h1>
      <br />
      <div className="box">
        {favs.map((image) => (
          <GalleryCard
            image={image}
            key={image.id}
            onClick={routeChangePhoto}
            setCurrentPhoto={setCurrentPhoto}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
