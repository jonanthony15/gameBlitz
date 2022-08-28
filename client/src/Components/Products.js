import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Products.scss';
import axios from 'axios';
// import { products } from '../Data/products';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [style, setStyle] = useState("product");

  const topAd = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png';

  useEffect(() =>
  {
    axios.get('http://localhost:3001/api/game').then((response) =>
    {
      setProducts(response.data);
    });
  }, [])

  const turnGrid = () =>
  {
    setStyle("product");
  }

  const turnBlock = () =>
  {
    setStyle("product2");
  };
  
  return (
    <React.Fragment>
      <main>
        <div className="prodBanner">
          <img src={topAd} alt="" className="prodBanner__img" />
        </div>
        <div className="header">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link>
          </div>
          <div className="toolbox">
            {/* <div className="toolbox__sort">
              <label htmlFor="sort">Sort by:</label>
              <select name="sort" id="select_sort">
                <option value="default">Default sorting</option>
                <option value="price_low_high">Sort by price low to high</option>
                <option value="price_high_low">Sort by price high to low</option>
                <option value="alpha_a_z">Sort by A-Z</option>
                <option value="alpha_z_a">Sort by Z-A</option>
              </select>
            </div> */}
            <div className="toolbox__layout">
              <span className="fas fa-th" onClick={turnGrid}></span>
              <span className="fas fa-list" onClick={turnBlock}></span>
            </div>
          </div>
        </div>
        <div className="products__container">
          <Sidebar />
          <section className="section__product">
            <div className={style}>
              {products.map((product, index) =>
              {
                const {game_id, game_title, game_price, console_title, genre_title, game_url} = product;
                return (
                  <div className="product__item" key={game_id}>
                    <img src={game_url} className="product__item-img" alt={game_title} />
                    <a href="#" className="product__item-name">{game_title}</a>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <p className="product__item-price">${game_price}</p>
                    <button className="btn btn__cart">Add to cart</button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Products