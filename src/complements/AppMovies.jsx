import React from "react";
import "../App.css";
import Buscador from "./Buscador";
import ResultMovies from "./ResultMovies";
import { useMovie } from "../hooks/useMovie";

const API = "http://www.omdbapi.com/?apikey=[f85b6ae]&";

function AppMovies() {
  const { movie } = useMovie();
  return (
    <div className="app">
      AppMovies
      <div>
        <Buscador />
        <ResultMovies movieList={movie} />
      </div>
    </div>
  );
}

export default AppMovies;
