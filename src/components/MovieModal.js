import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // required for accessibility

const MovieModal = ({ isOpen, onRequestClose, movie }) => {
  if (!movie) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
        content: {
          background: "#141414",
          color: "white",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "15px",
          maxWidth: "500px",
          width: "90%",
          padding: "20px",
        },
      }}
    >
      <h2>{movie.title}</h2>
      <p style={{ color: "gray", fontSize: "0.9rem" }}>
        Release Date: {movie.release_date || "N/A"}
      </p>
      <p style={{ marginTop: "10px" }}>{movie.overview || "No overview available."}</p>
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
        Rating: {movie.vote_average || "N/A"} ⭐
      </p>
      <button
        onClick={onRequestClose}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#e50914",
          border: "none",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </Modal>
  );
};

export default MovieModal;
