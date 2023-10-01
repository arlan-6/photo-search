import React, { useState, useEffect } from "react";
import axios from "axios";
import "./search.css";

const Search = ({ query }) => {
  const [inputValue, setInputValue] = useState("");

  // Define a function to handle the input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiUrl = "https://api.unsplash.com/photos/random";
    const apiKey = "wXc0jukFXgBZlzphTpei1zvoYYDkcDcig1c2UDy02Vk";

    const params = {
      count: 1,
      client_id: apiKey,
    };

    axios
      .get(apiUrl, { params })
      .then((response) => {
        setImages(response.data[0].urls.full);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <div className="searchContainerr">
      <div className="searchContainer">
        <img src={images} alt="" />
        <div className="search">
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={() => query(inputValue)}>0</button>
        </div>
      </div>
    </div>
  );
};
export default Search;
