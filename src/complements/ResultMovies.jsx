import React from "react";
import WithMovies from "./WithMovies";
import WithoutMovies from "./WithoutMovies";

function ResultMovies({ movieList }) {
  const hasMovies = false;
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
