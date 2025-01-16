"use client";

import axios from "axios";
import { useState } from "react";

export default function SearchForm() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [query, setQuery] = useState("");
  const [cast10, setCast10] = useState([]);

  const GetMovie = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=30c6aa9540869a14bd857ce4d5cb0881`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGM2YWE5NTQwODY5YTE0YmQ4NTdjZTRkNWNiMDg4MSIsIm5iZiI6MTczNTU3ODY5OC4zODgsInN1YiI6IjY3NzJkNDRhY2ZlNjI2NDRkZjEzMzNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeY8VpdvTpm-z3lGTiA7c81Sg6Rq7cTRDTKzdmgADZw`,
        },
      }
    );

    setMovieDetails(response.data);
    console.log(response);

    const movieId = response.data.results[0].id;

    const responseCredits = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=30c6aa9540869a14bd857ce4d5cb0881`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGM2YWE5NTQwODY5YTE0YmQ4NTdjZTRkNWNiMDg4MSIsIm5iZiI6MTczNTU3ODY5OC4zODgsInN1YiI6IjY3NzJkNDRhY2ZlNjI2NDRkZjEzMzNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeY8VpdvTpm-z3lGTiA7c81Sg6Rq7cTRDTKzdmgADZw`,
        },
      }
    );

    console.log(responseCredits);
    console.log(responseCredits.data.cast[0].name);

    const Cast = responseCredits.data.cast;
    const Cast10 = Cast.slice(0, 10);
    setCast10(Cast10);

    console.log(Cast);
    Cast10.map((actor) => {
      console.log(actor.name, "-", actor.character);
    });
  };

  return (
    <div>
      <form onSubmit={GetMovie}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
      </form>
      {movieDetails && <h1>{movieDetails.results[0].title}</h1>}
      {movieDetails && (
        <h2>Cinema Vault Rating - {movieDetails.results[0].vote_average}</h2>
      )}
      {movieDetails && (
        <h2>Release date - {movieDetails.results[0].release_date}</h2>
      )}
      {movieDetails && <p> {movieDetails.results[0].overview}</p>}
      {movieDetails && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.results[0].poster_path}`}
          alt={movieDetails.results[0].title}
        />
      )}

      {cast10.map((actor) => {
        return (
          <div key={actor.cast_id}>
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </div>
        );
      })}
    </div>
  );
}
