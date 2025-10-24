// src/pages/Favorites.js
import React from "react";
import MovieCard from "../components/MovieCard";

const Favorites = ({ favorites, setFavorites }) => {
  // Toggle favorite (remove from favorites)
  const toggleFavorite = (movie) => {
    setFavorites(favorites.filter((fav) => fav.id !== movie.id));
  };

  return (
    <div style={{ backgroundColor: "#0f0f0f", minHeight: "100vh", color: "white", padding: "40px" }}>
      <h1 style={{ textAlign: "center", padding: "20px", color: "#e50914" }}>
        ❤️ Your Favorites
      </h1>

      {favorites.length === 0 ? (
        <p style={{ textAlign: "center" }}>You have no favorite movies yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              genre="Movie"
              isFavorite={true} // always true in favorites
              toggleFavorite={() => toggleFavorite(movie)} // remove favorite on click
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
