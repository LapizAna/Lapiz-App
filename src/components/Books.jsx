// src/components/Books.jsx
import React, { useState } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";

// Initial books data
const initialBooks = [
  {
    title: "Devil In the White City",
    author: "Ana",
    dueDate: "2024-08-10",
    status: "Checked Out",
  },
  {
    title: "American Gods",
    author: "Ana",
    dueDate: "2024-08-15",
    status: "Checked Out",
  },
  {
    title: "The body",
    author: "Ana",
    dueDate: "2024-08-20",
    status: "Checked Out",
  },
  {
    title: "The Green Mile",
    author: "Ana",
    dueDate: "2024-08-25",
    status: "Checked Out",
  },
  {
    title: "Into the Wild",
    author: "Ana",
    dueDate: "2024-08-30",
    status: "Checked Out",
  },
  {
    title: "Great Expectations",
    author: "Lapiz",
    dueDate: "2024-08-05",
    status: "Checked Out",
  },
  {
    title: "Between two fires",
    author: "Ana",
    dueDate: "2024-08-05",
    status: "Checked Out",
  },
  {
    title: "The Breathing",
    author: "Lapiz",
    dueDate: "2024-08-05",
    status: "Checked Out",
  },
  {
    title: "Strong Poison",
    author: "Lapiz",
    dueDate: "2024-08-05",
    status: "Checked Out",
  },
  {
    title: "The Last Wish",
    author: "Lapiz",
    dueDate: "2024-08-05",
    status: "Checked Out",
  },
];

const Books = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStatus = (index) => {
    setBooks((prevBooks) =>
      prevBooks.map((book, i) =>
        i === index
          ? {
              ...book,
              status: book.status === "Available" ? "Checked Out" : "Available",
            }
          : book
      )
    );
  };

  const filteredBooks = books
    .map((book, index) => ({ ...book, originalIndex: index }))
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.dueDate.includes(searchQuery) ||
        book.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
      <h1>Book List</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <Book
                key={index}
                book={book}
                toggleStatus={() => toggleStatus(book.originalIndex)}
                index={index}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Books;