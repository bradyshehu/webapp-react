import { useParams } from "react-router-dom";
import ReviewList from "../components/ReviewList";

// CHIAMARE fetchMovieReviews da context(da fare) e come params della funzione inserire l'id preso da useParams, in questo modo dovrebbe funzionare
// nella get di fetchMoviesReviews fare chiamata a http://localhost:3000/movies/${id}, id passato qui, generico nella context

export default function MoviesDetailsPage() {
  const { id } = useParams();

  return <ReviewList />;
}
