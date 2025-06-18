import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="col-3">
      <div className="card h-100">
        <div className="card-media">
          <img src={`${movie.image}`} alt="" className="card-img" />
        </div>
        <div className="card-body">
          <div>
            <strong>Titolo: </strong>
            {movie.title}
          </div>
          <div>
            <strong>Regista: </strong>
            {movie.director}
          </div>
          <div>
            <strong>Anno di Uscita: </strong>
            {movie.release_year}
          </div>
          <div>
            <strong>Genere: </strong>
            {movie.genre}
          </div>
          <div>
            <strong>Sinossi: </strong>
            {movie.abstract}
          </div>
        </div>
        <div className="text-center">
          <Link to={`${movie.id}`} className="btn btn-primary my-2">
            Vedi recensioni
          </Link>
        </div>
      </div>
    </div>
  );
}
