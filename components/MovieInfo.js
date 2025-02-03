"use client";

export default function MovieInfo({ movie }) {
  return (
    <div>
      {movie && <h1>{movie.results[0].title}</h1>}
      {movie && <h2>Cinema Vault Rating - {movie.results[0].vote_average}</h2>}
      {movie && <h2>Release date - {movie.results[0].release_date}</h2>}
      {movie && <p> {movie.results[0].overview}</p>}
      {movie && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.results[0].poster_path}`}
          alt={movie.results[0].title}
        />
      )}
    </div>
  );
}
