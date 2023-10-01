import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import GalleryCard from "../galleryCard/galleryCard";

import "./gallery.css";
function Gallery({ setCurrentPhoto, query }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // let query = "random";
    const apiKey = "wXc0jukFXgBZlzphTpei1zvoYYDkcDcig1c2UDy02Vk";
    if (query == "" || query == " ") {
      const apiUrl = "https://api.unsplash.com/photos/random";

      const params = {
        count: 9,
        client_id: apiKey,
      };

      axios
        .get(apiUrl, { params })
        .then((response) => {
          setImages(response.data);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    } else {
      const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&count=${9}`;
      axios
        .get(apiUrl)
        .then((response) => {
          setImages(response.data.results); // Assuming response.data has a 'results' property
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
  }, [query]);

  let navigate = useNavigate();
  const routeChangePhoto = () => {
    let path = `photo`;
    navigate(path);
  };

  return (
    <div className="gallery">
      <div className="galleryContainer">
        {images.map((image) => (
          <GalleryCard
            image={image}
            key={image.id}
            click={routeChangePhoto}
            setCurrentPhoto={setCurrentPhoto}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
