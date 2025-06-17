import { useParams } from "react-router-dom";

export default function MoviesDetailsPage() {
  const { id } = useParams();

  return <h1>Movies title {id} </h1>;
}
