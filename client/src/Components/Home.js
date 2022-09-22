import React, {useState, useEffect} from 'react';
import ads from '../Data/ads';
import Featured from './Featured';
import './Home.scss';
import start from '../img/start.png'

const Home = () =>
{
  const topAd = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png';
  
  return (
    <React.Fragment>
      <div>
        <section className="section__homeTop">
          <div className="homeTop">
            <div className="homeTop__category">
              <h4 className="homeTop__header">Genres</h4>
              <ul className="homeTop__list">
                <li className="homeTop__list-item">
                  <a href="#" className="homeTop__link">Action &#38; Adventure</a>
                </li>
                <li className="homeTop__list-item">
                  <a href="#" className="homeTop__link">Fighting</a>
                </li>
                <li className="homeTop__list-item">
                  <a href="#" className="homeTop__link">First Person Shooter</a>
                </li>
                <li className="homeTop__list-item">
                  <a href="#" className="homeTop__link">Roleplaying</a>
                </li>
                <li className="homeTop__list-item">
                  <a href="#" className="homeTop__link">Simulation</a>
                </li>
                <li className="homeTop__list-item">
                  <a href="#" className="homeTop__link">Third Person Shooter</a>
                </li>
              </ul>
            </div>
            <div className="homeTop__advert">
              <img src={start} alt="advirtisment" className="homeTop__ad" />
            </div>
          </div>
        </section>
        <Featured />
        <section className="section__homeBottom">
          <div className="homeBottom">
            <div className="homeBottom__item homeBottom__item-1">
              <i class="homeBottom__item-icon fas fa-question-circle"></i>
              <p className="homeBottom__item-text">Contact Customer Service</p>
            </div>
            <div className="homeBottom__item homeBottom__item-2">
              <i className="homeBottom__item-icon fas fa-box"></i>
              <p className="homeBottom__item-text">Check Your Orders</p>
            </div>
            <div className="homeBottom__item homeBottom__item-3">
              <i className="homeBottom__item-icon fas fa-truck"></i>
              <p className="homeBottom__item-text">Shipping, Delivery, and Store Pickup</p>
            </div>
            <div className="homeBottom__item homeBottom__item-4">
              <i className="homeBottom__item-icon fas fa-exchange-alt"></i>
              <p className="homeBottom__item-text">Returns and Exchanges</p>
            </div>
            <div className="homeBottom__item homeBottom__item-5">
              <i className="homeBottom__item-icon fas fa-dollar-sign"></i>
              <p className="homeBottom__item-text">Price Match Guarantee</p>
            </div>
          </div>
        </section>
      </div>

    </React.Fragment>
  )
}

export default Home