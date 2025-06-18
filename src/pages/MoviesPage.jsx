import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  function fetchMovies() {
    axios.get(`${apiUrl}/movies`).then((res) => {
      setMovies(res.data);
    });
  }

  useEffect(() => fetchMovies, []);

  return (
    <>
      <div className="container my-3">
        <h1>Film</h1>
      </div>
      <MoviesList movies={movies} />
    </>
  );
}
