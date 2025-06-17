import MovieCard from "./MovieCard";

export default function MoviesList({ movies }) {
  return (
    <div className="container">
      <div className="row g-3">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
