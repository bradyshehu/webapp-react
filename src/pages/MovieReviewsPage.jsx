import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import { useLoading } from "../context/LoadingContext";

export default function MoviesDetailsPage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  const { setIsLoading } = useLoading();
  function fetchMovieDetail(id) {
    setIsLoading(true);
    axios
      .get(`${apiUrl}/movies/${id}`)
      .then((res) => {
        setMovieDetails(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  useEffect(() => {
    fetchMovieDetail(id);
  }, [id]);

  if (!movieDetails) return;

  return <ReviewList movieDetails={movieDetails} />;
}
