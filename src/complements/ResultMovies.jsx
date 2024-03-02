import React from "react";
import WithMovies from "./WithMovies";
import WithoutMovies from "./WithoutMovies";
import "../App.css";

function ResultMovies({ movieList }) {
  const hasMovies = true;
  return (
    <div>
      <main>
        {hasMovies ? <WithMovies movieList={movieList} /> : <WithoutMovies />}
        {}
      </main>
    </div>
  );
}

export default ResultMovies;
