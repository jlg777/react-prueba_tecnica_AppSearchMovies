import React, { useState } from "react";
import movies from "../assets/movie.json";

export const useMovie = (search) => {
  const [resultMovies, setResultMovies] = useState([]);
  const { Search: movie } = movies;

  const getMovies = () => {
    if (search) {
      fetch("https://omdbapi.com/?apikey=f85b6ae&s=thor")
        .then((res) => res.json())
        .then((json) => {
          setResultMovies(json);
        });
    }
  };

  //console.log(search, "use");

  return { resultMovies, getMovies };
};
