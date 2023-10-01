import React, { useEffect } from "react";
import Gallery from "../components/gallery/gallery";

const Home = ({ search, setCurrentPhoto, query }) => {
  useEffect(() => {
    search(false);
  }, []);
  return (
    <>
      <Gallery setCurrentPhoto={setCurrentPhoto} query={query} />
    </>
  );
};

export default Home;
