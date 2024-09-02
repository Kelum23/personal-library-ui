import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const DashboardPage = () => {
  const [editingBook, setEditingBook] = useState(null);

  const handleSave = () => {
    setEditingBook(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add or Edit Book</h2>
            <BookForm book={editingBook} onSave={handleSave} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Books</h2>
            <BookList onEdit={setEditingBook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
