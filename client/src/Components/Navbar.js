import React, {useState, useRef, useEffect} from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import {links} from '../Data/navData';
import logo from '../img/GameBlitz-logos_black.png'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar__top">
        <div className="navbar__logo">
          <a href="#">GameBlitz</a>
        </div>
        <div className="navbar__search">
          <form action="">
            <input type="text" placeholder="Search" />
          </form>

        </div>
        <div className="navbar__icons">
          <i></i>
          <i></i>
        </div>
      </div>
      <div className="navbar__bottom">
        <div className="navbar__links">
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="navbar__list-item">
              <Link to={"/products"}>Browse All</Link>
            </li>
            <li className="navbar__list-item">
              <a href="#" className="navbar__link">Categories</a>
            </li>
            <li className="navbar__list-item">
              <a href="#" className="navbar__link">Deals</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar