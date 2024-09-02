import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          MyLibrary
        </Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
            Dashboard
          </Link>
          <Link to="/login" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
            Login
          </Link>
          <Link to="/register" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
