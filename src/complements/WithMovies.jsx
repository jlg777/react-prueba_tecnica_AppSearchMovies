import React from "react";

const WithMovies = ({ movieList }) => {
  return (
    <div>
      <div>
        {movieList.map((movie) => (
          <div key={movie.imdbID}>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithMovies;
