import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  )
}

Navbar.defaultProps = {
    title: 'Contact Management',
    icon: 'fa-regular fa-address-card',
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Navbar
