import React, {useState, useEffect} from 'react';
import './Slider.scss';
import {ads} from '../Data/navData';

const Slider = () =>
{
  const [adverts, setAdverts] = useState(ads);
  const [index, setIndex] = useState(0);
  // console.log(ads);
  return (
    <section className="section__adsSlider">
      {ads.map((ad) =>
      {
        const {id, url} = ad;

        return (
          <div className="advertSlider" key={id}>
            <img src={url} alt="" />
          </div>
        );
      })}
    </section>
  );
}

export default Slider;