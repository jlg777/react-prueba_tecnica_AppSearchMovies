import React, { useState } from "react";

function Buscador({ onSearch }) {
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    //const formData = new FormData(e.currentTarget);
    //const searchValue = Object.fromEntries(formData);
    setSearchValue(e.target.search.value);
    if (searchValue) {
      onSearch(searchValue);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSearcher = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
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
        <p>Resultados para: {searchValue} </p>
      </header>
    </div>
  );
}

export default Buscador;
