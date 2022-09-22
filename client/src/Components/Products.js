import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Products.scss';
import axios from 'axios';
import { products, genres, consoles } from '../Data/products';
import eh from '../data';
import productGames from '../Data/productGames';

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [consoles, setConsoles] = useState([]);
  // const [genres, setGenres] = useState([]);
  const [gameItem, setGameItem] = useState(productGames);
  const [style, setStyle] = useState("product");

  const topAd = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png';

  // useEffect(() =>
  // {
  //   axios.get('https://nielapp.herokuapp.com/api/game').then((response) =>
  //   {
  //     setProducts(response.data);
  //   });

  //   axios.get('https://nielapp.herokuapp.com/api/console').then((response) => {
  //     setConsoles(response.data);
  //   });

  //   axios.get('https://nielapp.herokuapp.com/api/genre').then((response) => {
  //     setGenres(response.data);
  //   });
  // }, [])

  const productGenres = ['all', ...new Set(products.map((item) => item.genre_title))];
  console.log(productGenres);

  const turnGrid = () =>
  {
    setStyle("product");
  }

  const turnBlock = () =>
  {
    setStyle("product2");
  };

  const filterItems = () =>
  {
    const result = productGames.filter(game => game.genre_title === 'Simulation' && game.console_title === 'Xbox One');
    setGameItem(result);
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
          <Sidebar genres={genres} consoles={consoles} />
          {/* <section className="section__sidebar">
            <div className="sidebar">
              <h1 className="sidebar__heading">Categories</h1>
              <div className="sidebar__category">
                <p className="sidebar__category-title">Genres</p>
                {genres.map((genre) =>
                {
                  return (
                    <div key={genre.genre_id}>
                      <input 
                        type="checkbox"
                        name='genre'
                        value={genre.genre_title}
                        className='sidebar__category-choice'
                      />
                      <label htmlFor="genre">{genre.genre_title}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </section> */}
          <section className="section__product">
            <div className={style}>
              {gameItem.map((game, index) =>
              {
                return (
                  <div className="product__item" key={game.game_id}>
                    <Link to={`/products/${game.game_id}`}><img src={game.game_url} className="product__item-img" alt={game.game_title} /></Link>
                    <Link to={`/products/${game.game_id}`} className="product__item-name">{game.game_title}</Link>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <p className="product__item-price">${game.game_price}</p>
                    <button className="btn btn__cart">Add to cart</button>
                  </div>
                );
              })}
            </div>
            <button onClick={filterItems}>Filter</button>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Products