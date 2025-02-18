"use client";

import axios from "axios";
import { useState } from "react";
import MovieInfo from "./MovieInfo";
import CastInfo from "./CastInfo";

export default function Search() {
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

    const movieId = response.data.results[0].id;

    const responseCredits = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=30c6aa9540869a14bd857ce4d5cb0881`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGM2YWE5NTQwODY5YTE0YmQ4NTdjZTRkNWNiMDg4MSIsIm5iZiI6MTczNTU3ODY5OC4zODgsInN1YiI6IjY3NzJkNDRhY2ZlNjI2NDRkZjEzMzNlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeY8VpdvTpm-z3lGTiA7c81Sg6Rq7cTRDTKzdmgADZw`,
        },
      }
    );
    const Cast = responseCredits.data.cast;
    const Cast10 = Cast.slice(0, 10);
    setCast10(Cast10);
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
      <MovieInfo movie={movieDetails}></MovieInfo>
      <CastInfo cast={cast10}></CastInfo>
    </div>
  );
}
