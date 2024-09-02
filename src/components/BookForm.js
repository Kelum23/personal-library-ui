import React, { useState } from 'react';
import BookService from '../services/BookService';

const BookForm = ({ book, onSave }) => {
  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [publicationDate, setPublicationDate] = useState(book?.publicationDate || '');
  const [isbn, setIsbn] = useState(book?.isbn || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookData = { title, author, publicationDate, isbn };
    if (book) {
      await BookService.updateBook(book.id, bookData);
    } else {
      await BookService.createBook(bookData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Publication Date"
        value={publicationDate}
        onChange={(e) => setPublicationDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
