import React, { useEffect } from "react";
import "./photo.css";

function Photo({ search, image, setFavourites, favs }) {
  useEffect(() => {
    search(true);
  }, []);
  return (
    <div className="photoContainer">
      <img src={image.urls.full} alt="" className="back" />
      <div className="pContainer">
        <div className="miniContainer">
          <div className="author">
            <img
              src={image.user.profile_image.medium}
              alt=""
              className="profile"
            />
            {image.user.name}
          </div>
          <div className="butttons">
            <div
              className="fav"
              onClick={() => {
                setFavourites([...favs, image]);
                console.log(1);
              }}
            >
              💖 <span>Favourite</span>
            </div>
            <div className="down">
              ⬇️ <span>Download</span>
            </div>
          </div>
        </div>

        <img src={image.urls.full} alt="" className="mainImage" />
      </div>
    </div>
  );
}

export default Photo;
