import React from "react";
import Logo from "./OBJECTS.png";
import "./menu.css";
import Search from "../search/search";
import { useNavigate } from "react-router-dom";
const Menu = ({ isSmall, query }) => {
  let navigate = useNavigate();
  const routeChangeHome = () => {
    let path = ``;
    navigate(path);
  };
  const routeChangeFav = () => {
    let path = `favourites`;
    navigate(path);
  };
  return (
    <div className="menu">
      <div className="menuContainer">
        <div className="logo">
          <img src={Logo} alt="a" onClick={() => routeChangeHome()} />
        </div>
        <div className="favourites">
          {isSmall ? (
            <button onClick={() => routeChangeHome()}>
              {" "}
              <div className="icon">🔍</div>
              <span> Search</span>
            </button>
          ) : null}

          <button onClick={() => routeChangeFav()} className="fv">
            <div className="icon">💖</div> <span>Favourites</span>
          </button>
        </div>
      </div>
      {!isSmall ? <Search query={query} /> : null}
    </div>
  );
};
export default Menu;
