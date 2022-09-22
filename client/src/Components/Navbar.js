import React, {useState, useRef, useEffect} from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import {links} from '../Data/navData';
import logo from '../img/GameBlitz-logos_black.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

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
          <i className="fas fa-user navbar__icon"></i>
          <i className="fas fa-shopping-cart navbar__icon"></i>
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
        <div className="navbar__toggle">
          <i class="fas fa-bars" onClick={() => setToggleMenu(!toggleMenu)}></i>
        </div>
        {toggleMenu &&
        <div className="navbar__small">
          <ul className="navbar__small-list">
            <li className="navbar__small-list_item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="navbar__small-list_item">
              <Link to={"/products"}>Browse All</Link>
            </li>
            <li className="navbar__small-list_item">
              <a href="#" className="navbar__small-link">Categories</a>
            </li>
            <li className="navbar__small-list_item">
              <a href="#" className="navbar__small-link">Deals</a>
            </li>
            <li className="navbar__small-list_item">
              <a href="#" className='navbar__small-link'>Account</a>
            </li>
            <li className="navbar__small-list_item">
              <a href="#" className='navbar__small-link'>Cart</a>
            </li>
          </ul>
        </div>
        }
      </div>
    </nav>
  );
}

export default Navbar