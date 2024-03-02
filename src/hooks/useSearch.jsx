import { useEffect, useState } from "react";

const useSearch = (search) => {
  const [movieList, setMovieList] = useState([]);
  console.log(search, "aca");

  const fetchSearch = async () => {
    try {
      const response = await fetch(
        `https://omdbapi.com/?apikey=f85b6ae&s=${search}`
      );
      const data = await response.json();
      console.log(data.Search, "acallego");
      setMovieList(data.Search || []);
    } catch (error) {}
  };

  useEffect(() => {
    fetchSearch();
  }, [search]);

  return { movieList };
};

export default useSearch;
