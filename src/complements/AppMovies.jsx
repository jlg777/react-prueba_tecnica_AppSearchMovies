import React, { useState } from "react";
import "../App.css";
import Buscador from "./Buscador";
import ResultMovies from "./ResultMovies";
import useSearch from "../hooks/useSearch";

const API = "http://www.omdbapi.com/?apikey=[f85b6ae]&";

function AppMovies() {
  const [search, setSearch] = useState("");
  console.log(search, "appmovies");

  const { movieList } = useSearch(search);
  //console.log(movieList);

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  return (
    <div className="app">
      AppMovies
      <div>
        <Buscador onSearch={handleSearch} />
        <ResultMovies movieList={movieList} />
      </div>
    </div>
  );
}

export default AppMovies;
