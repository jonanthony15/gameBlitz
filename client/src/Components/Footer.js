import React from 'react';
import {Link} from 'react-router-dom';
import Slider from './Slider';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h4 className="footer__header">Contact info</h4>
        <div className="footer__contact-item">
          <p className="footer__text footer__text-white">Address</p>
          <p className="footer__text">Lorem Ipsum St, Dolor, USA</p>
        </div>
        <div className="footer__contact-item">
          <p className="footer__text footer__text-white">Phone</p>
          <p className="footer__text">555-555-555</p>
        </div>
        <div className="footer__contact-item">
          <p className="footer__text footer__text-white">Email</p>
          <p className="footer__text">email@email.com</p>
        </div>
        <div className="footer__contact-item">
          <p className="footer__text footer__text-white">Hours</p>
          <p className="footer__text">Mon-Fri 8am-6pm/Sat-Sun 9am-4pm</p>
        </div>
        <div className="footer__contact-icons">
          <i className="footer__contact-icon fab fa-facebook-f"></i>
          <i className="footer__contact-icon fab fa-twitter"></i>
          <i className="footer__contact-icon fab fa-instagram"></i>
        </div>
      </div>
      <div className="footer__form">
        <h4 className="footer__header">Create an account</h4>
        <div className="footer__text">Get the latest deals and more</div>
        <form action="" className="footer__form">
          <input type="text" placeholder="Enter email address" />
          <button className="btn">Sign Up</button>
        </form>
      </div>
      <div className="footer__links">
        <div className="footer__links-left">
          <h4 className="footer__header">Customer Service</h4>
          <ul className="footer__links-list">
            <li className="footer__links-item"><a className="footer__link">Contact us</a></li>
            <li className="footer__links-item"><a className="footer__link">My account</a></li>
            <li className="footer__links-item"><a className="footer__link">Order history</a></li>
            <li className="footer__links-item"><a className="footer__link">Lorem Ipsum</a></li>
            <li className="footer__links-item"><a className="footer__link">Dolores sit</a></li>
            <li className="footer__links-item"><a className="footer__link">Consectetur</a></li>
          </ul>
        </div>
        <div className="footer__links-right">
          <h4 className="footer__header">About us</h4>
          <ul className="footer__links-list">
            <li className="footer__links-item"><a className="footer__link">Corporate Information</a></li>
            <li className="footer__links-item"><a className="footer__link">Careers</a></li>
            <li className="footer__links-item"><a className="footer__link">Responsibility and Sustainability</a></li>
            <li className="footer__links-item"><a className="footer__link">Discover and learn</a></li>
            <li className="footer__links-item"><a className="footer__link">Adipiscing</a></li>
          </ul>
        </div>
      </div>
    </footer>
    // <footer>
    //   <div className="footer">
    //     <div className="footer__form">
    //       <h3 className="footer__heading">Lorem ipsum</h3>
    //       <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat.</p>
    //       <form>
    //         <input type="text" className="footer__form--input" placeholder="Email address"/>
    //         <button className="footer__button">Sign up</button>
    //       </form>
    //     </div>
        
    //     {/* <div className="footer__paragraph">
    //       <h3 className="footer__heading">Donec sed</h3>
    //     </div> */}
    //     <div className="footer__links">
    //       <h3 className="footer__heading">Links</h3>
    //       <Link to="/products" className="footer__links--link">Products</Link>
    //       <Link to="/products" className="footer__links--link">Preorder</Link>
    //       <Link to="/products" className="footer__links--link">Sony</Link>
    //       <Link to="/products" className="footer__links--link">Microsoft</Link>
    //       <Link to="/products" className="footer__links--link">Nintendo</Link>
    //     </div>
    //     <div className="footer__social">
    //       <h3 className="footer__heading">Follow us</h3>
    //       <span><i class="fab fa-facebook-square fa-2x footer__social--link"></i></span>
    //       <span><i class="fab fa-twitter-square fa-2x footer__social--link"></i></span>
    //       <span><i class="fab fa-linkedin fa-2x footer__social--link"></i></span>
    //       <span><i class="fab fa-github-square fa-2x footer__social--link"></i></span>
    //     </div>
    //   </div>
    // </footer>
  );
}

export default Footer