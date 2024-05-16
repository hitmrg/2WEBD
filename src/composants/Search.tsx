import { Link } from "react-router-dom";
import { SetStateAction, useState } from "react";
import "./Search.css";

export function Menu() {
  const [searchBar, setSearchBar] = useState("");

  const handleChange = (value: SetStateAction<string>) => {
    setSearchBar(value);
  };

  const handleSearch = () => {
    if (searchBar) {
      console.log("Recherche en cours:", searchBar);
    }
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <a className="logo" href="#">
            SUPKNOWLEDGE
          </a>
          <div className="menu">
            <Link to="/">Accueil</Link>
            <Link to="/contact">Contacts</Link>
          </div>
          <div className="search">
            <input
              type="text"
              name="searchBar"
              id="searchBar"
              value={searchBar}
              placeholder="Trouver votre oeuvre..."
              onChange={(e) => handleChange(e.target.value)}
            />
            <Link to={`/search/${searchBar}`}>
              <button className="buttonSearch" onClick={handleSearch}>
                🔍
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
