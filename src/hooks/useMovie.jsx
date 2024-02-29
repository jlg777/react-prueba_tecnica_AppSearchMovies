import React from "react";
import movies from "../assets/movie.json";

export const useMovie = () => {
  const { Search: movie } = movies;

  return { movie };
};
