import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='null'>
            <Link to="/home">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/dhashboard">Dhashboard</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Navbar;