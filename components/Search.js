"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";

export default function Button() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [query, setQuery] = useState("");

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
        <h2>Release date - {movieDetails.results[0].release_date}</h2>
      )}
      {movieDetails && <p>Description - {movieDetails.results[0].overview}</p>}
      {movieDetails && (
        <p>Poster Path - {movieDetails.results[0].poster_path}</p>
      )}
      {movieDetails && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.results[0].poster_path}`}
          alt={movieDetails.results[0].title}
        />
      )}
    </div>
  );
}
