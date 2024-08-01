// src/components/SearchFilter.jsx
import React from "react";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a book"
      />
    </div>
  );
};

export default SearchFilter;