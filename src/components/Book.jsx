// src/components/Book.jsx
import React from "react";

const Book = ({ book, toggleStatus, index }) => {
  const buttonStyle = {
    backgroundColor: book.status === "Available" ? "#E6D5A1" : "#8AC294",
    color: "black",
    padding: "5px 10px",
    cursor: "pointer",
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.status === "Checked Out" ? book.dueDate : ""}</td>
      <td>{book.status}</td>
      <td>
        <button style={buttonStyle} onClick={() => toggleStatus(index)}>
          Toggle Status
        </button>
      </td>
    </tr>
  );
};

export default Book;