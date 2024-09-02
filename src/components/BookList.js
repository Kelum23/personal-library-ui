import React, { useEffect, useState } from 'react';
import BookService from '../services/BookService';

const BookList = ({ onEdit }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await BookService.getBooks();
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await BookService.deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h3>Your Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
