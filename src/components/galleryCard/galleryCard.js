import React from "react";
import "./galleryCard.css";
import { Link } from "react-router-dom";
function GalleryCrad({ image, click, setCurrentPhoto }) {
  return (
    <Link
      to="photo"
      className="card"
      onClick={() => {
        click();
        setCurrentPhoto(image);
      }}
    >
      <img src={image.urls.small} alt="" />
    </Link>
  );
}

export default GalleryCrad;
