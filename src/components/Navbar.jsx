import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    BooksExchange
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/my-books" className="text-white hover:text-gray-300">My Books</Link>
                    <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
                    <Link to="/signin" className="text-white hover:text-gray-300">Sign In</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;