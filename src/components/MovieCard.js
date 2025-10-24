// src/components/MovieCard.js
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieCard = ({ title, genre, image, onClick, isFavorite, toggleFavorite }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "relative",
        backgroundColor: "#1f1f1f",
        color: "white",
        borderRadius: "15px",
        overflow: "hidden",
        width: "200px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
    >
      {/* Movie image */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
        onClick={onClick} // only clicking image opens modal
      />

      {/* Heart icon */}
      <div
        onClick={(e) => { e.stopPropagation(); toggleFavorite(); }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "1.5rem",
          color: isFavorite ? "red" : "white",
          zIndex: 2,
        }}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </div>

      {/* Movie title and genre */}
      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "1rem", marginBottom: "5px" }}>{title}</h3>
        <p style={{ color: "gray", fontSize: "0.85rem" }}>{genre}</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
