// src/pages/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import MovieModal from "../components/MovieModal";

const Home = ({ favorites, setFavorites }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalOpen(false);
  };

  const fetchMovies = async (query = "") => {
    try {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const url = query
        ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

      const response = await axios.get(url);
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (query) => {
    setLoading(true);
    fetchMovies(query);
  };

  const toggleFavorite = (movie) => {
    const exists = favorites.find((fav) => fav.id === movie.id);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div style={{ backgroundColor: "#0f0f0f", minHeight: "100vh", color: "white" }}>
      <h1 style={{ textAlign: "center", padding: "20px", color: "#e50914" }}>
        🎬 Movie Explorer
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    padding: "10px 20px", // space on mobile sides
    boxSizing: "border-box",
  }}
>
  <SearchBar onSearch={handleSearch} />
</div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "40px",
          justifyItems: "center",
        }}
      >
        {loading ? (
          <p>Loading movies...</p>
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              genre="Movie"
              onClick={() => openModal(movie)}
              isFavorite={favorites.some((fav) => fav.id === movie.id)}
              toggleFavorite={() => toggleFavorite(movie)}
            />
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>

      <MovieModal isOpen={modalOpen} onRequestClose={closeModal} movie={selectedMovie} />
    </div>
  );
};

export default Home;
