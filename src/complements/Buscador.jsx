import React, { useState } from "react";

function Buscador() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
  };

  const handleSearcher = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <header>
        <form className="form" onSubmit={handleSearch}>
          <label>Ingrese su pelicula</label>
          <input
            placeholder="Matrix, Dune"
            type="text"
            name="search"
            autoComplete="off"
            onChange={handleSearcher}
            style={{ borderColor: error ? "red" : "transparent" }}
          ></input>
          <button type="submit">Buscar..</button>
        </form>
        <p>Resultados para: {search}</p>
      </header>
    </div>
  );
}

export default Buscador;
