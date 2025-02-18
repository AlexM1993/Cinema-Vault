"use client";

export default function CastInfo({ cast }) {
  return (
    <div>
      {cast.length !== 0 && <h1>Cast</h1>}
      {cast.map((actor) => {
        return (
          <div key={actor.id}>
            <h2>{actor.name}</h2>
            <p>{actor.character}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
          </div>
        );
      })}
    </div>
  );
}
