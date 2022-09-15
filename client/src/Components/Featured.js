import React, {useState, useEffect} from 'react';
import '../App.scss';
import './Featured.scss';
import axios from 'axios';
import { feats, preorders, consoles } from '../Data/products';
// import { preorders } from '../Data/pre';
import promo1 from '../img/gameboyAd.jpg';
import promo2 from '../img/vrAd.jpg';
import promo3 from '../img/ps4controllerAd.jpg';
import promo4 from '../img/asset_promo2.png';

const PreOrder = (props) =>
{
  return (
    <div className="featgame__item">
      <a href="#">
        <img src={props.record.fld_img} alt={props.record.fld_title} className="featgame__item-img" />
      </a>
      <p className="featgame__item-title">{props.record.fld_title}</p>
    </div>
  )
}

const Featured = () =>
{
  // const [feats, setFeats] = useState([]);

  // useEffect(() =>
  // {
  //   axios.get('https://nielapp.herokuapp.com/api/featured').then((response) =>
  //   {
  //     setFeats(response.data);
  //   });
  // }, []);

  return (
    <React.Fragment>
      <section className="section__featured">
        <div className="featured featgame">
          <h3 className="featured__heading">Best Sellers</h3>
          <div className="featgame__list">
            {/* {featureds.map((featured) =>
            {
              const {id, url, name, price} = featured;
              return (
                <div className="featgame__item" key={id}>
                  <a href="#">
                    <img src={url} alt={name} className="featgame__item-img" />
                    <p className="featgame__item-title">{name}</p>
                  </a>
                  <p className="featgame__item-price">${price}</p>
                  <button className="btn btn__cart">Add to cart</button>
                </div>
              );
            })} */}
            {feats.map((feat) =>
            {
              const {id, feat_title, feat_price, url} = feat;
              return (
                <div className='featgame__item' key={id}>
                  <a href="#">
                    <img src={url} alt={feat_title} className='featgame__item-img'/>
                    <p className="featgame__item-title">{feat_title}</p>
                  </a>
                  <p className="featgame__item-price">${feat_price}</p>
                  <button className='btn btn__cart'>Add to cart</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="promo">
          <div className="promo__left">
            <img src={promo1} alt="promo1" className='promo__img-1' />
            <img src={promo2} alt="" className='promo__img-2' />
          </div>
          <div className="promo__right">
            <img src={promo3} alt="" className='promo__img-3' />
          </div>
          
        </div>
        <div className="featured featgame">
          <h3 className="featured__heading">Pre order</h3>
          <div className="featgame__list">
            {preorders.map((preorder) =>
            {
              const {id, url, name} = preorder;
              return (
                <div className="featgame__item" key={id}>
                  <a href="#">
                    <img src={url} alt={name} className="featgame__item-img"/>
                    <p className="featgame__item-title">{name}</p>
                  </a>
                  <button className="btn btn__cart">Pre order</button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="promo">
          <img src={promo4} alt="promo4" />
        </div>
      </section>
    </React.Fragment>
  )
}

export default Featured