const movieDetails = {
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
  reviews: [
    {
      id: 3,
      movie_id: 3,
      name: "Grace",
      vote: 5,
      text: "A heartbreaking love story.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2025-06-17T16:32:52.000Z",
      title: "Titanic",
      director: "James Cameron",
      genre: "Romance",
      release_year: 1997,
      abstract:
        "A romantic story set against the tragic sinking of the RMS Titanic.",
      image: "titanic.jpg",
    },
    {
      id: 3,
      movie_id: 3,
      name: "Hank",
      vote: 4,
      text: "Beautiful visuals and a moving plot.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2025-06-17T16:32:52.000Z",
      title: "Titanic",
      director: "James Cameron",
      genre: "Romance",
      release_year: 1997,
      abstract:
        "A romantic story set against the tragic sinking of the RMS Titanic.",
      image: "titanic.jpg",
    },
    {
      id: 3,
      movie_id: 3,
      name: "Ivy",
      vote: 3,
      text: "A bit too melodramatic for my taste.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2025-06-17T16:32:52.000Z",
      title: "Titanic",
      director: "James Cameron",
      genre: "Romance",
      release_year: 1997,
      abstract:
        "A romantic story set against the tragic sinking of the RMS Titanic.",
      image: "titanic.jpg",
    },
  ],
};

import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

export default function ReviewList() {
  return (
    <>
      <div className="container my-2">
        <h1>Recensioni {movieDetails.title}</h1>
      </div>
      <div className="container d-flex my-2">
        <div className="col-3">
          <img src={movieDetails.image} alt="" className="card-img" />
        </div>
        <div className="col-9  mx-3">
          <ul>
            <li>{movieDetails.title}</li>
            <li>{movieDetails.director}</li>
            <li>{movieDetails.genre}</li>
            <li>{movieDetails.release_year}</li>
            <li>{movieDetails.abstract}</li>
          </ul>
        </div>
      </div>
      {/* review card */}
      <div className="container my-5">
        <h2>Recensioni</h2>
        {/* MAP DI movieDetails.reviews */}

        {movieDetails.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div className="container">
        <ReviewForm />
      </div>
    </>
  );
}
