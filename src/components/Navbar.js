import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/LOGO.png';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/board">Board</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/newsletter">Newsletter</Link></li>
        <li>
          <a href="https://hackforhumanity.io/" target="_blank" rel="noopener noreferrer">H4H</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
