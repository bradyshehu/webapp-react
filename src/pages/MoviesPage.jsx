const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2010,
    abstract:
      "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    image: "http://localhost:3000/img/inception.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-05-22T10:55:27.000Z",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Crime",
    release_year: 1972,
    abstract:
      "The story of a powerful Italian-American crime family and their struggles.",
    image: "http://localhost:3000/img/the_godfather.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-06-17T16:32:52.000Z",
  },
  {
    id: 3,
    title: "Titanic",
    director: "James Cameron",
    genre: "Romance",
    release_year: 1997,
    abstract:
      "A romantic story set against the tragic sinking of the RMS Titanic.",
    image: "http://localhost:3000/img/titanic.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-06-17T16:32:52.000Z",
  },
  {
    id: 4,
    title: "The Matrix",
    director: "The Wachowskis",
    genre: "Action",
    release_year: 1999,
    abstract:
      "A hacker discovers the truth about his reality and his role in the war against its controllers.",
    image: "http://localhost:3000/img/matrix.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-06-17T16:32:52.000Z",
  },
  {
    id: 5,
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2014,
    abstract:
      "A team of explorers travels through a wormhole in space to save humanity.",
    image: "http://localhost:3000/img/interstellar.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-06-17T16:32:52.000Z",
  },
];

import MoviesList from "../components/MoviesList";

export default function MoviesPage() {
  return (
    <>
      <div className="container my-3">
        <h1>Film</h1>
      </div>
      <MoviesList movies={movies} />
    </>
  );
}
