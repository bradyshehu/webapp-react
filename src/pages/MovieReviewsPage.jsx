import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";

export default function MoviesDetailsPage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  function fetchMovieDetail(id) {
    axios.get(`${apiUrl}/movies/${id}`).then((res) => {
      setMovieDetails(res.data);
    });
  }
  useEffect(() => {
    fetchMovieDetail(id);
  }, [id]);

  if (!movieDetails) return <p>Caricamento...</p>;

  return <ReviewList movieDetails={movieDetails} />;
}
