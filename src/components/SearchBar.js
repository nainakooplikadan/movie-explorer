import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form
  onSubmit={handleSubmit}
  style={{
    width: "100%",
    maxWidth: "500px", // limits width on large screens
    display: "flex",
  }}
>
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search movies..."
    style={{
      flex: 1,
      padding: "10px 15px",
      borderRadius: "8px 0 0 8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      minWidth: "0", // prevents overflow on mobile
    }}
  />
  <button
    type="submit"
    style={{
      padding: "10px 15px",
      borderRadius: "0 8px 8px 0",
      border: "none",
      backgroundColor: "#e50914",
      color: "white",
      cursor: "pointer",
      fontSize: "1rem",
    }}
  >
    Search
  </button>
</form>

  );
};

export default SearchBar;
